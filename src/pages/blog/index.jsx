import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import SitePost from '../../components/SitePost'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')

    posts.sort((valueA, valueB) => {
      const dateA = new Date(get(valueA, 'post.frontmatter.date'))
      const dateB = new Date(get(valueB, 'post.frontmatter.date'))

      return dateB - dateA;
    })

    posts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SitePost data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    return (
      <div className="container">
        <Helmet
          title={`Blog | ${get(site, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile.png?v=2`,
            },
          ]}
        />
        <div className="row">
          {pageLinks}
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          excerpt(pruneLength: 250)
          frontmatter {
            layout
            title
            path
            categories
            date(formatString: "DD MMM, YYYY")
            theme
            previous
            next
          }
        }
      }
    }
  }
`
