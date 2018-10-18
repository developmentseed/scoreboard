export function validateRole (roles, role) {
  if (!roles || !role) return false
  return !!roles.map((role) => role.name).includes(role)
}

export function isAdmin (roles) {
  return validateRole(roles, 'admin')
}
