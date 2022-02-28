
/**
 * Worker runs in a clock process and updates non-osmesa metric based badges
 * Using supplied csv. CSV source is sy
 *
 * @returns {Promise} a response
 */
async function badgeWorker (isCmd) {}
if (require.main === module) {
    return badgeWorker(true).then(() => process.exit(0)).catch((e) => process.exit(1))
}

module.exports = tmWorker