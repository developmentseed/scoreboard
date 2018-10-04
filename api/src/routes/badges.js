const connection = require('../db/connection')

async function get(req, res) {
  // try {
    const { id } = req.params
    const db = connection()
    let fromDB = null
    if (!id) {
      fromDB = await db('custom-badges').select()
    }
    else {
      fromDB = await db('custom-badges').where('id', '=', id)
    }
    return res.send({
      badges: fromDB
    })
  /*
  }
  catch (e) {
    return res.sendStatus(500)
  }
  */
}

async function post(req, res) {
  try {
    const { body } = req
    const db = connection()
    // Note that we'll need to add security here
    console.log('insert ', body, ' into DB')
    await db('custom-badges').insert(body)
    return res.sendStatus(200)
  }
  catch (e) {
    return res.sendStatus(500)
  }
}

module.exports = {
  get,
  post
}
