export function validateRole (roles, role) {
  if (!roles || !role) return false
  return !!roles.includes(role)
}

export function isAdmin (roles) {
  return validateRole(roles, 'admin')
}
