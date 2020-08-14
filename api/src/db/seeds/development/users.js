const usersClock = require('../../../users_clock')
const limit = require('p-limit')(100)
const rp = require('request-promise-native')
const { merge } = require('ramda')

const { cache } = require('../../../config')

exports.seed = (knex) => knex('users').del() // delete entries
  .then(async () => {
    const osmesaDB = require('knex')({
      client: 'pg',
      connection: cache.get('osmesa-db')
    })

    const users = await osmesaDB('users').select('id as osm_id', 'name as full_name')
    
    // Make sure all users are unique
    const seen = new Map()
    users.forEach( u =>{
      seen.set(u.osm_id, u)
    })
    await knex('users').insert([...seen.values()])

    // for dev purposes, load MR users from project leader boards
    return getMrUsers(knex)
  })
  .then(usersClock)

/*
 * These functions load in users from MR Challenge leaderboards and add them to the scoreboard database
 */
const getMrUsers = async knex => {
  const [{ id, url }] = await knex('taskers').where('type', 'mr').select()

  const mrChallenges = await knex('campaigns').where('tasker_id', id).select()
  return getAndUpdateUsers(knex, mrChallenges, url)
}

async function getAndUpdateUsers (db, challenges, url) {
  let qs = {
    limit: 25,
    monthDuration: -1,
    challengeIds: challenges.map(c => c.tm_id).join(',')
  }
  const usersResp = await rp({
    uri: `${url}/api/v2/data/user/leaderboard`,
    qs,
    headers: { 'Accept-Language': 'en-US,en;q=0.9' }
  })
  const mrUsers = JSON.parse(usersResp)

  const proms = mrUsers.map(curUser => limit(async () => {
    const resp = await rp({
      uri: `${url}/api/v2/user/${curUser.userId}/public`,
      headers: { 'Accept-Language': 'en-US,en;q=0.9' }
    })
    const userData = JSON.parse(resp)
    const user = {
      osm_id: userData.osmProfile.id,
      full_name: userData.osmProfile.displayName,
      user_info: {
        display_name: userData.osmProfile.displayName,
        full_name: userData.osmProfile.displayName
      }

    }

    return db('users')
      .where({ 'osm_id': user.osm_id, 'full_name': user.full_name })
      .then(rows => {
        try {
          if (rows.length === 0) {
            console.log(user.osm_id)
            return db('users').insert(merge(user, { updated_at: db.fn.now(), created_at: db.fn.now() }))
          } else {
            return db('users').where('osm_id', user.osm_id).update(merge(user, { updated_at: db.fn.now() }))
          }
        } catch (err) {
          console.log(user)
        }
      })
  }))

  return Promise.all(proms)
}
