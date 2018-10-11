
exports.up = async function(knex, Promise) {
    try {
        // await knex('badges').del();
        await knex.schema.table('badges', (table) => {
            table.integer('category');
            table.specificType('operations', 'text[][]');
            table.dropColumn('metric');
            table.dropColumn('tiers');
        });
        await knex('badges').insert([
            {'name': 'Year-long Mapper', 'operations': [['>', 'daysTotal', '100']], 'category': 15, 'description': 'Map early, map often. Map as many days as you can to achieve new levels.'}, 
            {'name': 'Consistency', 'operations': [['>', 'daysInRow', '50']], 'category': 14, 'description': 'Great mappers map everyday. Editfor a consecutive numbers of days in a month to achieve new levels.'}, 
            {'name': 'On Point', 'operations': [['>', 'pois', '5000']], 'category': 3, 'description': 'Places of interest gucategorye where you can go. Every community needs hospitals, schools, businesses mapped to enable access. Each new level is achieved by creating new places on the map.'}, 
            {'name': 'The Wright Stuff', 'operations': [['>', 'buildings', '1000']], 'category': 4, 'description': 'Frank Lloyd Wright knew buildings, and so do you. Each new level is achieved by mapping and editing buildings.'}, 
            {'name': 'On The Road Again', 'operations': [['>', 'roadKms', '500']], 'category': 6, 'description': 'Transportation matters. Put communities on the map by creating new roads. Each new level achieved by creating new roads.'}, 
            {'name': 'Long and Winding Road', 'operations': [['>', 'roadKmMods', '500']], 'category': 7, 'description': 'Roads need maintainence. Existing roads are replaced by new roads and they need to be updated. Each new level achieved by editing existing roads.'}, 
            {'name': 'White Water Rafting', 'operations': [['>', 'waterways', '500']], 'category': 8, 'description': 'Waterways, rivers, streams and more. Adding water features to the map adds regional context and valuable information in the event of flooding. Add these features to reach new levels of this badge.'}, 
            {'name': 'World Renown', 'operations': [['>', 'countries', '25']], 'category': 9, 'description': 'You are famous around the globe. The more you edit in new countries, the more you can become world renown. Each new level is achieved by mapping in new countries around the world.'}, 
            {'name': 'Awesome JOSM', 'operations': [['>', 'josm', '100']], 'category': 12, 'description': 'JOSM is a tool used to edit OpenStreetMap. It is particularly useful for mapping larger areas more quickly and contains many additional, advanced tools. Map using JOSM to achieve this badge.'}, 
            {'name': 'Mapathoner', 'operations': [['>', 'hashtags', '50']], 'category': 13, 'description': 'Mapathons are entry points to mapping. They also provcategorye structure to train and become a better mapper. Each new level is achieved by attending and participating in mapathons.'}
        ]);
    }
    catch (e) {
        console.error(e);
    }
};

exports.down = async function(knex, Promise) {
    await knex('badges').del();
    await knex.schema.table('badges', (table) => {
        table.dropColumn('category');
        table.dropColumn('operations');
        table.specificType('tiers', 'int[]');
        table.string('metric');
    });
    await knex('badges').insert([
        {'id': 15, 'tiers': [25, 50, 100], 'description': 'Map early, map often. Map as many days as you can to achieve new levels.', 'metric': 'daysTotal', 'name': 'Year-long Mapper'}, 
        {'id': 14, 'tiers': [5, 20, 50], 'description': 'Great mappers map everyday. Edit for a consecutive numbers of days in a month to achieve new levels.', 'metric': 'daysInRow', 'name': 'Consistency'}, 
        {'id': 3, 'tiers': [500, 2500, 5000], 'description': 'Places of interest guide where you can go. Every community needs hospitals, schools, businesses mapped to enable access. Each new level is achieved by creating new places on the map.', 'metric': 'pois', 'name': 'On Point'}, 
        {'id': 4, 'tiers': [100, 500, 1000], 'description': 'Frank Lloyd Wright knew buildings, and so do you. Each new level is achieved by mapping and editing buildings.', 'metric': 'buildings', 'name': 'The Wright Stuff'}, 
        {'id': 6, 'tiers': [50, 100, 500], 'description': 'Transportation matters. Put communities on the map by creating new roads. Each new level achieved by creating new roads.', 'metric': 'roadKms', 'name': 'On The Road Again'}, 
        {'id': 7, 'tiers': [50, 100, 500], 'description': 'Roads need maintainence. Existing roads are replaced by new roads and they need to be updated. Each new level achieved by editing existing roads.', 'metric': 'roadKmMods', 'name': 'Long and Winding Road'}, 
        {'id': 8, 'tiers': [50, 100, 500], 'description': 'Waterways, rivers, streams and more. Adding water features to the map adds regional context and valuable information in the event of flooding. Add these features to reach new levels of this badge.', 'metric': 'waterways', 'name': 'White Water Rafting'}, 
        {'id': 9, 'tiers': [5, 10, 25], 'description': 'You are famous around the globe. The more you edit in new countries, the more you can become world renown. Each new level is achieved by mapping in new countries around the world.', 'metric': 'countries', 'name': 'World Renown'}, 
        {'id': 12, 'tiers': [1, 10, 100], 'description': 'JOSM is a tool used to edit OpenStreetMap. It is particularly useful for mapping larger areas more quickly and contains many additional, advanced tools. Map using JOSM to achieve this badge.', 'metric': 'josm', 'name': 'Awesome JOSM'}, 
        {'id': 13, 'tiers': [5, 20, 50], 'description': 'Mapathons are entry points to mapping. They also provide structure to train and become a better mapper. Each new level is achieved by attending and participating in mapathons.', 'metric': 'hashtags', 'name': 'Mapathoner'}
    ]);
};
