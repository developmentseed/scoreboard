
exports.up = async function(knex, Promise) {
    try {
        await knex.schema.createTable('custom-badges', table => {
            table.integer('id');
            table.string('name');
            table.specificType('operations', 'text[][]');
            table.string('description');
            table.timestamps();
        });
        await knex('custom-badges').insert([
            {'name': 'Year-long Mapper', 'operations': [['>', 'daysTotal', '100']], 'id': 15, 'description': 'Map early, map often. Map as many days as you can to achieve new levels.'}, 
            {'name': 'Consistency', 'operations': [['>', 'daysInRow', '50']], 'id': 14, 'description': 'Great mappers map everyday. Editfor a consecutive numbers of days in a month to achieve new levels.'}, 
            {'name': 'On Point', 'operations': [['>', 'pois', '5000']], 'id': 3, 'description': 'Places of interest guide where you can go. Every community needs hospitals, schools, businesses mapped to enable access. Each new level is achieved by creating new places on the map.'}, 
            {'name': 'The Wright Stuff', 'operations': [['>', 'buildings', '1000']], 'id': 4, 'description': 'Frank Lloyd Wright knew buildings, and so do you. Each new level is achieved by mapping and editing buildings.'}, 
            {'name': 'On The Road Again', 'operations': [['>', 'roadKms', '500']], 'id': 6, 'description': 'Transportation matters. Put communities on the map by creating new roads. Each new level achieved by creating new roads.'}, 
            {'name': 'Long and Winding Road', 'operations': [['>', 'roadKmMods', '500']], 'id': 7, 'description': 'Roads need maintainence. Existing roads are replaced by new roads and they need to be updated. Each new level achieved by editing existing roads.'}, 
            {'name': 'White Water Rafting', 'operations': [['>', 'waterways', '500']], 'id': 8, 'description': 'Waterways, rivers, streams and more. Adding water features to the map adds regional context and valuable information in the event of flooding. Add these features to reach new levels of this badge.'}, 
            {'name': 'World Renown', 'operations': [['>', 'countries', '25']], 'id': 9, 'description': 'You are famous around the globe. The more you edit in new countries, the more you can become world renown. Each new level is achieved by mapping in new countries around the world.'}, 
            {'name': 'Awesome JOSM', 'operations': [['>', 'josm', '100']], 'id': 12, 'description': 'JOSM is a tool used to edit OpenStreetMap. It is particularly useful for mapping larger areas more quickly and contains many additional, advanced tools. Map using JOSM to achieve this badge.'}, 
            {'name': 'Mapathoner', 'operations': [['>', 'hashtags', '50']], 'id': 13, 'description': 'Mapathons are entry points to mapping. They also provide structure to train and become a better mapper. Each new level is achieved by attending and participating in mapathons.'}
        ])
    }
    catch (e) {
        console.error(e);
    }
};

exports.down = async function(knex, Promise) {
    try {
        await knex.schema.dropTable('custom-badges');
        } catch (e) {
        console.error(e);
        }
};
