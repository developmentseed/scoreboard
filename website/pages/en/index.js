/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const Button = props => (
  <div className='pluginWrapper buttonWrapper'>
    <a className='button' href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
)

const PromoSection = props => (
  <div className='section promoSection'>
    <div className='promoRow'>
      <div className='pluginRowBlock'>{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render () {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}/`

    const SplashContainer = props => (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>{props.children}</div>
        </div>
      </div>
    )

    const ProjectTitle = () => (
      <h2 className='projectTitle'>
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    return (
      <SplashContainer>
        <div className='inner'>
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('users/getting-started')}>Getting Started</Button>
            <Button href={docUrl('admin/overview')}>Administration</Button>
            <Button href={docUrl('developers/overview')}>Developers</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render () {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl, osmProjectName } = siteConfig

    const Block = props => (
      <Container
        padding={['top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const Mappers = () => (
      <Block align='left'>
        {[
          {
            content: 'For mappers, Scoreboard provides motivation. Through their profile page, Scoreboard keeps track of users edits, awarding them badges as they progress.',
            image: `${baseUrl}img/about-mapper.jpg`,
            imageAlign: 'left',
            title: 'Mappers'
          }
        ]}
      </Block>
    )

    const Description = () => (
      <Block background='' align='left'>
        {[
          {
            content:
              `Scoreboard provides insight into the ${osmProjectName} ecosystem, making users more informed & more effective.`,
            image: `${baseUrl}img/about-badge.png`,
            imageAlign: 'left',
            align: 'right',
            title: 'About Scoreboard'
          }
        ]}
      </Block>
    )

    const Overview = () => (
      <Block align='left'>
        {[
          {
            content: 'Scoreboard provides an overview of what’s happening on the system as well as detailed information on individual mappers, teams, campaigns, and countries.',
            image: `${baseUrl}img/about-campaignmanager.jpg`,
            imageAlign: 'right',
            title: 'Campaigns'
          }
        ]}
      </Block>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className='mainContainer'>
          <Description />
          <hr />
          <Overview />
          <hr />
          <Mappers />
        </div>
      </div>
    )
  }
}

module.exports = Index
