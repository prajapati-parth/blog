import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { Card } from 'eureka-ui';
import { siteMetadata } from '../../../gatsby-config'
import withGaTracker from '../../hocs/withGaTracker'

const PROJECT_LIST = [
  {
    name: "Education Lessons",
    image: "https://dl.dropboxusercontent.com/s/icc5ggmv579py6b/EL.png?dl=0",
    description: "Educational start up to help engineering students with video lectures",
    link: "https://educationlessons.co.in"
  },
  {
    name: "Slave Bot",
    image: "https://dl.dropboxusercontent.com/s/ywlwhoggj13ayzt/SlaveBot.png?dl=0",
    description: "A bot that automates GitHub workfllows",
    link: "https://slave-bot.webflow.io"
  },
  {
    name: "Gitlly",
    image: "https://dl.dropboxusercontent.com/s/2adj79bgyjzdgkx/Gittly.png?dl=0",
    description: "A git client made using Electron and React",
    link: "https://prajapati-parth.github.io/gitlly/"
  },
  {
    name: "Minimal React",
    image: "https://dl.dropboxusercontent.com/s/wp1y2tfpi138vyo/Minimal%20React.png?dl=0",
    description: "Command line tool for quickly getting started with React application",
    link: "https://www.npmjs.com/package/minimal-react/"
  },
  {
    name: "Eureka UI",
    image: "https://dl.dropboxusercontent.com/s/om1tnte0u8eou2a/Eureka%20UI.png?dl=0",
    description: "Component design system for this website",
    link: "http://eurekaui.parthp.dev/"
  },
];

class Projects extends React.Component {
  render() {
    const title = 'Projects'

    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/projects`,
            },
            {
              property: 'og:image',
              content: `https://avatars1.githubusercontent.com/u/17194534`,
            },
          ]}
        />

        <div className="row">
          {
            PROJECT_LIST.map(project => (
              <div className="col-sm-12 col-md-6">
                <Card title={project.name} img={project.image} click={() => window.open(project.link, '_blank')}>
                  {project.description}
                </Card>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default withGaTracker(Projects)