import React from 'react'
import emergence from 'emergence.js'

import NavigationBar from '../components/NavigationBar'
import { siteMetadata } from '../../gatsby-config'
import './gatstrap.scss'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon-2.2/devicon.min.css'
import 'font-awesome/css/font-awesome.css'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    return (
      <div>
        <NavigationBar title={siteMetadata.title} {...this.props} />
        {this.props.children()}
      </div>
    )
  }
}

export default Template
