import React from 'react'
import Link from 'next/link'

const image1 = '/static/about-campaignmanager.jpg'
const image2 = '/static/about-mapper.jpg'

const About = ({ project }) => (
  <div className='About'>
    <header className='header--internal '>
      <div className='row'>
        <h1 className='header--xlarge'>About</h1>
      </div>
    </header>
    <section className='text-body section-first--sm'>
      <div className='row'>
        <p className='text-body--large'>{'Scoreboard is a site that provides insight into the ' + project + ' ecosystem, making the users not only more informed but more efficient.'}</p>
        <div className='clearfix about--block'>
          <p style={{ float: 'left' }} className='text-body--med width--sm'>For campaign managers, Scoreboard provides an overview of what’s happening on the system, and also a way to get detailed information on individual mappers or campaigns. Discover all active <Link href='/campaigns'><a>campaigns.</a></Link></p>
          <Link href='/campaigns'>
            <a>
              <img className='img-about1' style={{ float: 'right' }} src={image1} alt='Individual project page screenshots' />
            </a>
          </Link>
        </div>
        <div className='clearfix about--block'>
          <Link href='/users'>
            <a>
              <img className='img-about2' style={{ float: 'left' }} src={image2} alt='Screenshot for an individual mappers page' />
            </a>
          </Link>
          <p style={{ float: 'left' }} className='text-body--med width--sm'>For mappers, scoreboard provides motivation. Through their profile page, Scoreboard keeps track of users edits, awarding them badges as they progress. Find your profile or those of other mappers <Link href='/users'><a>here.</a></Link></p>
        </div>
      </div>
    </section>
  </div>
)

export default About
