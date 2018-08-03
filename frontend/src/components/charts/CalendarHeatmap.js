import React from 'react';
import {ResponsiveCalendar} from '@nivo/calendar';
import getISOYear from 'date-fns/get_iso_year';

export default ({times}) => {
  // Get the earliest year
  const years = times.map(time => getISOYear(time.day));
  const earliestYear = years.sort()[0];

  const values = times.map(time => ({ day: time.day, value: time.count }));

  return (
    <ResponsiveCalendar
      data={values}
      from={`${earliestYear}-02-01`}
      to={new Date()}
      emptyColor="#eeeeee"
      colors={[
        "#61cdbb",
        "#97e3d5",
        "#e8c1a0",
        "#f47560"
      ]}
      margin={{
        "top": 50,
        "right": 0,
        "bottom": 0,
        "left": 0
      }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      monthLegendOffset={1}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          "anchor": "bottom-right",
          "direction": "row",
          "itemCount": 4,
          "itemWidth": 34,
          "itemHeight": 40,
          "itemDirection": "top-to-bottom"
        }
      ]}
      theme={{
        "tooltip": {
          "container": {
            "fontSize": "13px"
          }
        },
        "labels": {
          "textColor": "#555"
        }
      }}
    />
  )
}