/* eslint-disable */
exports.seed = async (knex) => {
    await knex('badges').del()
    return knex('badges').insert([
        { 'name': 'Year-long Mapper', 'operations': [['>', 'daysTotal', '100']], 'category': 15, 'imageFile': '15-1-graphic.svg', 'description': 'Map early, map often. Map as many days as you can to achieve new levels.' },
        { 'name': 'Consistency', 'operations': [['>', 'daysInRow', '50']], 'category': 14, 'imageFile': '14-1-graphic.svg', 'description': 'Great mappers map everyday. Editfor a consecutive numbers of days in a month to achieve new levels.' },
        { 'name': 'On Point', 'operations': [['>', 'pois', '5000']], 'category': 3, 'imageFile': '3-1-graphic.svg', 'description': 'Places of interest gucategorye where you can go. Every community needs hospitals, schools, businesses mapped to enable access. Each new level is achieved by creating new places on the map.' },
        { 'name': 'The Wright Stuff', 'operations': [['>', 'buildings', '1000']], 'category': 4, 'imageFile': '4-1-graphic.svg', 'description': 'Frank Lloyd Wright knew buildings, and so do you. Each new level is achieved by mapping and editing buildings.' },
        { 'name': 'On The Road Again', 'operations': [['>', 'roadKms', '500']], 'category': 6, 'imageFile': '6-1-graphic.svg', 'description': 'Transportation matters. Put communities on the map by creating new roads. Each new level achieved by creating new roads.' },
        { 'name': 'Long and Winding Road', 'operations': [['>', 'roadKmMods', '500']], 'category': 7, 'imageFile': '7-1-graphic.svg', 'description': 'Roads need maintainence. Existing roads are replaced by new roads and they need to be updated. Each new level achieved by editing existing roads.' },
        { 'name': 'White Water Rafting', 'operations': [['>', 'waterways', '500']], 'category': 8, 'imageFile': '8-1-graphic.svg', 'description': 'Waterways, rivers, streams and more. Adding water features to the map adds regional context and valuable information in the event of flooding. Add these features to reach new levels of this badge.' },
        { 'name': 'World Renown', 'operations': [['>', 'countries', '25']], 'category': 9, 'imageFile': '9-1-graphic.svg', 'description': 'You are famous around the globe. The more you edit in new countries, the more you can become world renown. Each new level is achieved by mapping in new countries around the world.' },
        { 'name': 'Awesome JOSM', 'operations': [['>', 'josm', '100']], 'category': 12, 'imageFile': '12-1-graphic.svg', 'description': 'JOSM is a tool used to edit OpenStreetMap. It is particularly useful for mapping larger areas more quickly and contains many additional, advanced tools. Map using JOSM to achieve this badge.' },
        { 'name': 'Campaigner', 'operations': [['>', 'hashtags', '50']], 'category': 13, 'imageFile': '13-1-graphic.svg', 'description': 'Mapathons are entry points to mapping. They also provcategorye structure to train and become a better mapper. Each new level is achieved by attending and participating in mapathons.' }
    ])
}
