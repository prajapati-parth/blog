import React from 'react'
import { navigateTo } from 'gatsby-link'
import get from 'lodash/get'
import Adsense from '../Adsense'

import { Card } from 'eureka-ui'
import ReadNext from '../ReadNext'
import './style.scss'

class SitePost extends React.Component {
  render() {
    const { site, data, isIndex } = this.props
    console.log(isIndex)
    const title = get(data, 'frontmatter.title')
    const path = get(data, 'frontmatter.path')
    const date = get(data, 'frontmatter.date')
    const excerpt = get(data, 'excerpt')
    const ad = isIndex ? (
      ''
    ) : (
      <Adsense clientId={site.meta.adsense} slotId="" format="auto" />
    )

    return (
      <div className="container">
        <div className="articles col-md-12">
          <Card
            title={title}
            theme="blueGradient"
            body={excerpt}
            categories={data.frontmatter.categories}
            timeStamp={date}
            click={() => navigateTo(path)}
          />
          {ad}
          {isIndex ? '' : <ReadNext data={site} />}
        </div>
      </div>
    )
  }
}

export default SitePost
