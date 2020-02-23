import React from 'react'
import get from 'lodash/get'
import { Card } from 'eureka-ui'
import { navigateTo } from 'gatsby-link'
import { ArrowRight } from 'react-feather'

import MoreSidebar from '../MoreSidebar'
import SocialMediaShare from '../SocialMediaShare'
import withGaTracker from '../../hocs/withGaTracker'
import { SOCIAL_MEDIA_TYPE } from '../SocialMediaShare/constants'
import './style.scss'

class SitePage extends React.Component {
  getUrl(path) {
    return `https://parthp.dev${path}`
  }

  render() {
    const { data } = this.props;
    const { FACEBOOK, TWITTER, LINKEDIN } = SOCIAL_MEDIA_TYPE;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
          <div className="post-container">
            <div className="post">
              <div className="title-container">
                <span className="title">{get(data, 'post.frontmatter.title')}</span>
              </div>
              <hr />
              <div>
                <div dangerouslySetInnerHTML={{ __html: get(data, 'post.html') }} />
              </div>
            </div>
          </div>
          </div>
          <div className="col-4 d-none d-lg-block">
            <MoreSidebar />
            <div className="share-widget-container">
              <SocialMediaShare
                type={[TWITTER, LINKEDIN, FACEBOOK]}
                url={this.getUrl(get(data, 'post.frontmatter.path'))}
                title={get(data, 'post.frontmatter.title')}
              />
            </div>
          </div>
        </div>

        
        <div className="next-post-container row">
            <div className="col-lg-8 col-md-12">
              {
                get(data, 'post.frontmatter.next') && (
                  <Card
                    title='Read next:'
                    click={() => navigateTo(get(data, 'post.frontmatter.next')[1])}
                    theme={get(data, 'post.frontmatter.next')[2]}
                  >
                    <span className="next-post-title">
                      {get(data, 'post.frontmatter.next')[0]}&nbsp;&nbsp;<ArrowRight />
                    </span>
                  </Card>
                )
              }
            </div>
          </div>
      </div>
    )
  }
}

export default withGaTracker(SitePage)
