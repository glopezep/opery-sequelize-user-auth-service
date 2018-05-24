'use strict'

const utils = require('./utils')

module.exports = function user (Model) {
  return {
    async getUserByUsername (username, callback) {
      try {
        if (!username) {
          throw new Error('username is empty')
        }

        const user = await Model.findOne({ where: { username } })

        if (!user) {
          throw new Error('user not found')
        }

      } catch (e) {
        return Promise.reject(e)
      }
    },

    async authenticate (username, password, callback) {
      try {
        if (!username || !password) {
          return Promise.reject(new Error('username or password is empty'))
        }

        const user = await this.getUserByUsername(username)

        if (user.get('password') !== utils.encrypt(password)) {
          throw new Error('username or password incorrect')
        }

        return Promise.resolve(true)
      } catch (e) {
        return Promise.resolve(false)
      }
    }
  }
}


