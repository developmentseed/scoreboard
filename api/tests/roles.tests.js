'use strict'

const test = require('ava')
const request = require('supertest')
const connection = require('../src/db/connection')
const app = require('../src/index')
const { omit } = require('ramda')

let db

test.before(async () => {
  db = connection()
  await db.migrate.latest()
  await db.seed.run()
})

test.after.always(async () => {
  await db.destroy()
})

