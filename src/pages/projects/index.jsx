import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { Card } from 'eureka-ui';
import { PROJECT_LIST } from './constants'
import { siteMetadata } from '../../../gatsby-config'
import withGaTracker from '../../hocs/withGaTracker'

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