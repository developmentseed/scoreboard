import React from 'react'
import Link from '../Link'
import countryList from '../../lib/utils/country-list.json'
import DataNotAvailable from '../DataNotAvailable'
import InlineList from '../InlineList'

function findCountryByName (countryName) {
  return countryList.find((country) => {
    return countryName === country.label
  })
}

function formatCountryList (userCountries) {
  if (!userCountries) return
  return userCountries.map((country) => {
    const c = findCountryByName(country.name)
    if (!c) return
    country.code = findCountryByName(country.name).value
    return country
  }).filter((country) => !!country)
}

function DashboardSidebar (props) {
  const { teams, osmesaData } = props
  const countries = osmesaData ? formatCountryList(osmesaData.country_list) : []
  return (
    <div className='sidebar-right widget-25'>
      <h2 className='header--large' style={{ marginBottom: 5 }}>
        <Link href='/teams'>
          <a class='header-link'>Teams</a>
        </Link>
      </h2>
      {
        teams && teams.length
          ? (
            <InlineList
              viewMore='/teams'
              list={teams.map((item) => {
                return {
                  name: item.name,
                  href: `/teams/${item.id}`
                }
              })}
            />
          )
          : (
            <DataNotAvailable message={'You haven\'t joined any teams yet'} callToAction='Explore teams' callToActionUrl='/teams' />
          )
      }

      <h2 className='header--large' style={{ marginBottom: 5 }}>
        <Link href='/countries'>
          <a class='header-link'>Countries</a>
        </Link>
      </h2>
      {
        countries.length
          ? (
            <InlineList
              viewMore='/countries'
              list={countries.map((item) => {
                return {
                  name: item.name,
                  href: `/countries/${item.code}`
                }
              })}
            />
          )
          : (
            <DataNotAvailable message='We have not found any stats for your profile' callToAction='Explore countries' callToActionUrl='/countries' />
          )
      }
    </div>
  )
}

export default DashboardSidebar
