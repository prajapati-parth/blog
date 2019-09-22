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
      <div className="articles col-md-12">
        <Card
          title={title}
          theme={data.frontmatter.theme}
          categories={data.frontmatter.categories}
          timeStamp={date}
          click={() => navigateTo(path)}
          showButton
          buttonText='Read more'
        >
        {excerpt}
        </Card>
        {ad}
        {isIndex ? '' : <ReadNext data={site} />}
      </div>
    )
  }
}

export default SitePost
