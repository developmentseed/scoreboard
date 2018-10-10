module.exports = {
  validateRole(roles, role) {
    if (!roles || !role) return false
    return !!roles.includes(role)
  }
}
