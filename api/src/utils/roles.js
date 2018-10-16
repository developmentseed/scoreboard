module.exports = {
  /**
   * validate that a user has a specific role
   *
   * @param {string[]} roles - array of role name
   * @param {string} role - role name
   * @returns {Promise} a response
   */
  validateRole(roles, role) {
    if (!roles || !role) return false
    return !!roles.includes(role)
  }
}
