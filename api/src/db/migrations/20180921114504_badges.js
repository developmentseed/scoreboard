
exports.up = async function(knex, Promise) {
    try {
        await knex.schema.createTable('badges', table => {
            table.increments('id');
            table.string('name');
            table.specificType('tiers', 'int[]');
            table.string('metric');
            table.timestamps();
        });
        await knex('badges').insert([{'metric': 'daysTotal', 
        'name': 'Year-long Mapper', 
        'id': 15,
        'tiers': [25, 50, 100 ]
        },
        {'metric': 'daysInRow', 
        'name': 'Consistency', 
        'id': 14,
        'tiers': [5, 20, 50 ]
        },
        {'metric': 'pois', 
        'name': 'On Point',
        'id': 3,
        'tiers': [500, 2500, 5000]
        },
        {'metric': 'buildings', 
        'name': 'The Wright Stuff',
        'id': 4,
        'tiers': [100, 500, 1000]
        },
        {'metric': 'roadKms', 
        'name': 'On The Road Again',
        'id': 6,
        'tiers': [50, 100, 500]
        },
        {'metric': 'roadKmMods', 
        'name': 'Long and Winding Road',
        'id': 7,
        'tiers': [50, 100, 500]
        },
        {'metric': 'waterways', 
        'name': 'White Water Rafting',
        'id': 8,
        'tiers': [50, 100, 500]
        },
        {'metric': 'countries', 
        'name': 'World Renown',
        'id': 9,
        'tiers': [5, 10, 25]
        },
        {'metric': 'josm', 
        'name': 'Awesome JOSM',
        'id': 12,
        'tiers': [1, 10, 100]
        },
        {'metric': 'hashtags', 
        'name': 'Mapathoner',
        'id': 13,
        'tiers': [5, 20, 50]
        }])
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
