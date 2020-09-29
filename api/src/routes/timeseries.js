const OSMesa = require('../services/osmesa')
/**
 * Create teams route
 * /timeseries
 *
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @returns {Promise} a response
 */
async function list (req, res) {
  const { body } = req
  try {
    const timeseriesData = await OSMesa.getTimeseries(body)
    console.log('route', timeseriesData)
    return res.send(sampletimeseries)
  } catch (err) {
    console.error(err)
    return res.boom.badRequest('Could not create timeseries')
  }
}
module.exports = { list }

const sampletimeseries = {
  bins: [
    {
      startDate: 'Ut veniam ad',
      endDate: 'ut quis',
      userStatistics: [
        {
          userId: -50085087,
          name: 'ut labore sed sint',
          measurements: {
            road_km_added: -44291500.430500545,
            road_km_deleted: -98090445.28549272,
            road_km_modified: -28135698.87679535,
            waterway_km_added: 98910305.71896744,
            waterway_km_deleted: 62755412.23833746,
            waterway_km_modified: -97346772.76948634,
            coastline_km_added: -56308063.86394047,
            coastline_km_deleted: 85137044.10143158,
            coastline_km_modified: 60587615.23281303,
            railline_km_added: 19502303.78300017,
            railline_km_deleted: -96856048.91483241,
            railline_km_modified: 58380122.27295205,
            landuse_km2_added: 72491138.31491506,
            landuse_km2_deleted: -60283582.12706171,
            landuse_km2_modified: -12756048.119271219,
            natural_km2_added: -99932233.51162124,
            natural_km2_deleted: 29534671.38768433,
            natural_km2_modified: -55351211.5850757
          },
          counts: {
            roads_added: -66362974,
            roads_deleted: -70778030,
            roads_modified: 99952386,
            waterways_added: -15978204,
            waterways_deleted: 1890317,
            waterways_modified: 53049760,
            coastlines_added: -67917428,
            coastlines_deleted: 89869404,
            coastlines_modified: -39604281,
            buildings_added: 88378858,
            buildings_deleted: 3704291,
            buildings_modified: 7770331,
            railway_features_modified: 85082845,
            railway_features_added: -97244678,
            railway_features_deleted: -46621884,
            raillines_added: 57304989,
            raillines_deleted: 38607534,
            raillines_modified: 53949764,
            pois_modified: 12823426,
            pois_added: -56963819,
            pois_deleted: 33628099,
            landuse_added: -90654901,
            landuse_deleted: 66093578,
            landuse_modified: 95253377,
            natural_added: -85066620,
            natural_deleted: 51183096,
            natural_modified: 41054140,
            other_added: 29732257,
            other_deleted: 41043445,
            other_modified: 72799706
          },
          changesetCount: -1996257,
          editCount: 53817257
        },
        {
          userId: 35221880,
          name: 'esse adipisicing ut',
          measurements: {
            road_km_added: -57240315.45893999,
            road_km_deleted: 94125731.31712598,
            road_km_modified: -74678147.8731679,
            waterway_km_added: -54519033.98504632,
            waterway_km_deleted: 69514020.71923503,
            waterway_km_modified: -43377044.67261791,
            coastline_km_added: 15873356.57295981,
            coastline_km_deleted: -47410608.28508115,
            coastline_km_modified: -31561190.36387919,
            railline_km_added: 54213760.524659365,
            railline_km_deleted: -87435656.4424088,
            railline_km_modified: -7908493.709900275,
            landuse_km2_added: 5877842.5704948455,
            landuse_km2_deleted: 35433706.543109536,
            landuse_km2_modified: -25110145.003199995,
            natural_km2_added: -70666668.09086986,
            natural_km2_deleted: -65917456.16853295,
            natural_km2_modified: 83006379.12608236
          },
          counts: {
            roads_added: 37311630,
            roads_deleted: 51956272,
            roads_modified: -75244380,
            waterways_added: 62071639,
            waterways_deleted: 85141482,
            waterways_modified: 79541179,
            coastlines_added: -34852289,
            coastlines_deleted: 33607864,
            coastlines_modified: -22652758,
            buildings_added: -17596112,
            buildings_deleted: -72715439,
            buildings_modified: 42081074,
            railway_features_modified: 65648681,
            railway_features_added: -31866460,
            railway_features_deleted: -17943870,
            raillines_added: 2909509,
            raillines_deleted: -27436255,
            raillines_modified: 59088051,
            pois_modified: 8758758,
            pois_added: 56290725,
            pois_deleted: 26376796,
            landuse_added: -85091788,
            landuse_deleted: 10155049,
            landuse_modified: -72063268,
            natural_added: 15467422,
            natural_deleted: -72701711,
            natural_modified: 8940034,
            other_added: 59281178,
            other_deleted: 42028092,
            other_modified: 42967862
          },
          changesetCount: 30302163,
          editCount: 90374640
        }
      ]
    },
    {
      startDate: 'dolore labore adipisicing',
      endDate: 'adipisicing esse ipsum aute',
      userStatistics: [
        {
          userId: -14496320,
          name: 'consectetur Ut magna enim',
          measurements: {
            road_km_added: -93421369.84305345,
            road_km_deleted: 25813047.827376544,
            road_km_modified: -17450431.637816563,
            waterway_km_added: -43218979.165668614,
            waterway_km_deleted: 68519046.47353813,
            waterway_km_modified: 42572818.14451203,
            coastline_km_added: 34453764.70032832,
            coastline_km_deleted: 75665269.66358745,
            coastline_km_modified: 63313866.03784695,
            railline_km_added: -19304932.398585707,
            railline_km_deleted: -15397585.955211565,
            railline_km_modified: -52427148.926078804,
            landuse_km2_added: 22915212.187268436,
            landuse_km2_deleted: 70122550.92280883,
            landuse_km2_modified: 36388345.73730102,
            natural_km2_added: 13797361.042665914,
            natural_km2_deleted: -70571525.16242403,
            natural_km2_modified: 7792305.1200558245
          },
          counts: {
            roads_added: -15348178,
            roads_deleted: -65607281,
            roads_modified: 24573368,
            waterways_added: 66746046,
            waterways_deleted: 91272890,
            waterways_modified: 96144339,
            coastlines_added: -92910973,
            coastlines_deleted: -35543748,
            coastlines_modified: -75850955,
            buildings_added: -3291565,
            buildings_deleted: -2168041,
            buildings_modified: 89436069,
            railway_features_modified: 90868331,
            railway_features_added: -97638142,
            railway_features_deleted: 17793568,
            raillines_added: -22647937,
            raillines_deleted: 13124468,
            raillines_modified: 73318970,
            pois_modified: 37196251,
            pois_added: -55565143,
            pois_deleted: 68548910,
            landuse_added: 32470695,
            landuse_deleted: 1370965,
            landuse_modified: -78500537,
            natural_added: -46825148,
            natural_deleted: -33114549,
            natural_modified: 16453113,
            other_added: -17064510,
            other_deleted: -84556844,
            other_modified: -89335451
          },
          changesetCount: 38247029,
          editCount: 75439562
        },
        {
          userId: 18123762,
          name: 'proident non quis pariatur',
          measurements: {
            road_km_added: -24813877.382611156,
            road_km_deleted: -40169107.418123804,
            road_km_modified: -88480770.60447004,
            waterway_km_added: -95597418.26358196,
            waterway_km_deleted: 60567467.310691774,
            waterway_km_modified: 44875273.55260363,
            coastline_km_added: 14352125.589825436,
            coastline_km_deleted: -41691121.57439421,
            coastline_km_modified: 12795757.155425936,
            railline_km_added: 22003334.27426946,
            railline_km_deleted: -45991060.543736316,
            railline_km_modified: 98133003.4260711,
            landuse_km2_added: -89328429.74004851,
            landuse_km2_deleted: 47065003.59973717,
            landuse_km2_modified: -26217072.55371861,
            natural_km2_added: 87691434.05929744,
            natural_km2_deleted: 8291212.752287656,
            natural_km2_modified: 1875317.7200160623
          },
          counts: {
            roads_added: -87402479,
            roads_deleted: -64174055,
            roads_modified: -64332824,
            waterways_added: -88380548,
            waterways_deleted: 45531465,
            waterways_modified: -60887690,
            coastlines_added: 17132478,
            coastlines_deleted: -87806892,
            coastlines_modified: -57196253,
            buildings_added: -46604016,
            buildings_deleted: -94452876,
            buildings_modified: 65207936,
            railway_features_modified: -86929773,
            railway_features_added: -31022838,
            railway_features_deleted: -26602350,
            raillines_added: 93438423,
            raillines_deleted: -53059148,
            raillines_modified: 14891380,
            pois_modified: 39251324,
            pois_added: 97896717,
            pois_deleted: -78295611,
            landuse_added: 87896351,
            landuse_deleted: 25586597,
            landuse_modified: 9255797,
            natural_added: -36643671,
            natural_deleted: -68428652,
            natural_modified: -27515691,
            other_added: -32483037,
            other_deleted: 94053604,
            other_modified: 58968198
          },
          changesetCount: 73386304,
          editCount: 95434458
        }
      ]
    }
  ]
}
