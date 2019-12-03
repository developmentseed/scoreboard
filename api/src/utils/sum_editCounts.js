/**
 * Given a records object, sum all users' edit_counts
 * and return the number back as the sum of all edit_counts
 * @param {Object} records
 */
module.exports = records => {
  if (!(records && records.users)) return 0

  var usersEdits = records.users.reduce(
    (i, users) => i + parseInt(users.edit_count || 0, 10), 0)
  return usersEdits
}
