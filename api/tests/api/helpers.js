const request = require('supertest')

/*
* asynchronous function returning a promise for creating a supertest agent
* to use as an authenticated user
*
*/
exports.createAuthenticatedUser = async (app, userRoles) => {
  if (typeof userRoles === 'string') {
    userRoles = [userRoles]
  }

  const user = request.agent(app)

  const url = userRoles
    ? `/auth/openstreetmap?roles=${userRoles.join(',')}`
    : '/auth/openstreetmap'

  return new Promise((resolve, reject) => {
    user
      .get(url)
      .end((err, res) => {
        if (err) return reject(err)
        if (res.error) {
          return reject(err)
        }
        return resolve(user)
      })
  })
}

/*
* synchronous function creating a supertest agent to use as an anonymous user
*/
exports.createAnonymousUser = (app) => {
  return request(app)
}
