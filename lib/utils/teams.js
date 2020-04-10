/**
 * Map team assignment integer priority to simple 3 tier naming.
 *
 * @type {{'1': string, '2': string, '3': string}}
 */
const priorityDescription = Object.freeze({
  1: 'High',
  2: 'Medium',
  3: 'Low'
})

/**
 * Helper function to sum statistics from osmesa for usage in the Team Blurb
 * component. Converts from osmesa database column names to JavaScript names.
 *
 * @param {number} km_roads_add
 * @param {number} km_roads_mod
 * @param {number} km_waterways_add
 * @param {number} km_waterways_mod
 * @param {number} poi_add
 * @param {number} poi_mod
 * @param {number} km_coastlines_add
 * @param {number} km_coastlines_mod
 * @param {number} buildings_add
 * @param {number} buildings_mod
 * @returns {{waterwaysKmMapped: *, buildingsMappedCount: *, poiCountMappedCount: *, coastlinesKmMapped: *, roadsKmMapped: *}}
 */
function calculateBlurbStats ({
  km_roads_add,
  km_roads_mod,
  km_waterways_add,
  km_waterways_mod,
  poi_add,
  poi_mod,
  km_coastlines_add,
  km_coastlines_mod,
  buildings_add,
  buildings_mod
}) {
  return {
    poiCountMappedCount: poi_add + poi_mod,
    roadsKmMapped: km_roads_add + km_roads_mod,
    waterwaysKmMapped: km_waterways_add + km_waterways_mod,
    coastlinesKmMapped: km_coastlines_add + km_coastlines_mod,
    buildingsMappedCount: buildings_add + buildings_mod
  }
}

/**
 * Create an empty data structure representing a team member with no edits. This
 * is the same shape as the osmesa user_statistics table. osmesa only returns
 * records for mappers with edits.
 *
 * @param osmId
 * @param name
 * @returns {{km_waterways_mod: number, km_coastlines_del: number, edit_times: [], hashtags: [], coastlines_mod: number, km_roads_add: number, roads_add: number, buildings_add: number, km_waterways_del: number, poi_del: number, uid: *, waterways_mod: number, changeset_count: number, poi_mod: number, km_railways_del: number, km_coastlines_mod: number, railways_mod: number, km_roads_del: number, editors: [], coastlines_del: number, km_railways_mod: number, roads_del: number, coastlines_add: number, buildings_del: number, km_waterways_add: number, km_roads_mod: number, railways_del: number, roads_mod: number, waterways_del: number, buildings_mod: number, last_edit: null, country_list: [], waterways_add: number, poi_add: number, name: *, km_coastlines_add: number, edit_count: number, km_railways_add: number, railways_add: number}}
 */
function emptyMemberStats (osmId, name) {
  return {
    uid: osmId,
    name,
    edit_count: 0,
    changeset_count: 0,
    last_edit: null,
    editors: [],
    edit_times: [],
    hashtags: [],
    country_list: [],
    roads_add: 0,
    roads_mod: 0,
    roads_del: 0,
    waterways_add: 0,
    waterways_mod: 0,
    waterways_del: 0,
    coastlines_add: 0,
    coastlines_mod: 0,
    coastlines_del: 0,
    buildings_add: 0,
    buildings_mod: 0,
    buildings_del: 0,
    poi_add: 0,
    poi_mod: 0,
    poi_del: 0,
    railways_add: 0,
    railways_mod: 0,
    railways_del: 0,
    km_roads_add: 0,
    km_roads_mod: 0,
    km_roads_del: 0,
    km_waterways_add: 0,
    km_waterways_mod: 0,
    km_waterways_del: 0,
    km_coastlines_add: 0,
    km_coastlines_mod: 0,
    km_coastlines_del: 0,
    km_railways_add: 0,
    km_railways_mod: 0,
    km_railways_del: 0
  }
}

module.exports = { emptyMemberStats, calculateBlurbStats, priorityDescription }
