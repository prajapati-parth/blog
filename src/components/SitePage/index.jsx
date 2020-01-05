import React from 'react'
import get from 'lodash/get'

import withGaTracker from '../../hocs/withGaTracker'
import './style.scss'

class SitePage extends React.Component {
  render() {
    const { data } = this.props
    return (
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
    )
  }
}

export default withGaTracker(SitePage)
