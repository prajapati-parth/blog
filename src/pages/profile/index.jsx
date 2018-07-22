import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { siteMetadata } from '../../../gatsby-config'
import ProfileSideBar from '../../components/ProfileSidebar'
import ProfileContent from '../../components/ProfileContent'
import withGaTracker from '../../hocs/withGaTracker'

class Profile extends React.Component {
  render() {
    const title = 'Profile'

    return (
      <div className="container">
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
              content: `${get(siteMetadata, 'siteUrl')}/profile`,
            },
            {
              property: 'og:image',
              content: `https://avatars1.githubusercontent.com/u/17194534`,
            },
          ]}
        />

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <ProfileSideBar />
          </div>
          <div className="col-xs-12 col-sm-8">
            <ProfileContent />
          </div>
        </div>
      </div>
    )
  }
}

export default withGaTracker(Profile)
