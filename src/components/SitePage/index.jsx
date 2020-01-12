import React from 'react'
import get from 'lodash/get'
import { Card } from 'eureka-ui'
import { navigateTo } from 'gatsby-link'
import { ArrowRight, ArrowLeft } from 'react-feather'

import withGaTracker from '../../hocs/withGaTracker'
import './style.scss'

class SitePage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div>
        <div className="post-container">
          <div className="container">
            <div className="title-container">
              <span className="title">{get(data, 'post.frontmatter.title')}</span>
            </div>
            <hr />
            <div className="post">
              <div dangerouslySetInnerHTML={{ __html: get(data, 'post.html') }} />
            </div>
          </div>
        </div>

        <div className="next-post-container row">
          <div className="col-12 col-md-6">
            {
              get(data, 'post.frontmatter.previous') && (
                <Card
                  click={() => navigateTo(get(data, 'post.frontmatter.previous')[1])}
                  theme={get(data, 'post.frontmatter.previous')[2]}
                >
                  <span className="next-post-title">
                    <ArrowLeft />{get(data, 'post.frontmatter.previous')[0]}
                  </span>
                </Card>
              )
            }
          </div>

          <div className="col-12 col-md-6">
            {
              get(data, 'post.frontmatter.next') && (
                <Card
                  click={() => navigateTo(get(data, 'post.frontmatter.next')[1])}
                  theme={get(data, 'post.frontmatter.next')[2]}
                >
                  <span className="next-post-title">
                    {get(data, 'post.frontmatter.next')[0]}<ArrowRight />
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
