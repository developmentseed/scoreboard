
exports.up = async function(knex, Promise) {
    try {
        await knex.schema.createTable('badges', table => {
            table.increments('id');
            table.string('badge_name');
            table.specificType('tier_limits', 'int[]');
            table.string('metric_name');
            table.timestamps();
        });
        } catch (e) {
        console.error(e);
        }
};

exports.down = async function(knex, Promise) {
    try {
        await knex.schema.dropTable('badges');
        } catch (e) {
        console.error(e);
        }
};
