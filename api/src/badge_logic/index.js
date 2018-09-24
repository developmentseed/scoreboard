import getSumBadges from './sum_based_badges';
import dateSequentialCheck from './date_check_sequential';
import dateTotalCheck from './date_check_total';
import { mergeAll, reject, isNil, filter, map, prop, compose, sum } from 'ramda';

const getJosmEditCount = compose(
  sum,
  map(prop('count')),
  filter(x => x.editor.toLowerCase().includes('josm'))
);

export default userData => {
  const {
    buildings_add,
    waterways_add,
    poi_add,
    km_roads_add,
    km_roads_mod,
    country_list,
    hashtags,
    editors,
    edit_times
  } = userData;

  var sumBadges = reject(isNil)(getSumBadges({
    buildings: Number(buildings_add),
    waterways: Number(waterways_add),
    pois: Number(poi_add),
    roadKms: Number(km_roads_add),
    roadKmMods: Number(km_roads_mod),
    countries: Object.keys(country_list).length,
    josm: getJosmEditCount(editors),
    hashtags: Object.keys(hashtags).length
  }));

  const consistencyBadge = dateSequentialCheck(edit_times);
  const historyBadge = dateTotalCheck(edit_times);
  const allBadges = mergeAll([sumBadges, consistencyBadge, historyBadge]);
  var earnedBadges = {};
  for (let key in allBadges) {
    let val = allBadges[key];
    if (val && val.badgeLevel > 0) {
      earnedBadges[key] = val;
    }
  }

  var sortedSumBadges = Object.keys(sumBadges).sort(function (a, b) {
    return sumBadges[a].points.percentage - sumBadges[b].points.percentage;
  });

  var mostObtainableNames = sortedSumBadges.slice(-3);
  var mostObtainable = sumBadges[mostObtainableNames[mostObtainableNames.length - 1]];
  var secondMostObtainable = sumBadges[mostObtainableNames[mostObtainableNames.length - 2]];
  var thirdMostObtainable = sumBadges[mostObtainableNames[mostObtainableNames.length - 3]];

  return {
    all: allBadges,
    earnedBadges,
    mostAttainable: [mostObtainable, secondMostObtainable, thirdMostObtainable]
  };
};