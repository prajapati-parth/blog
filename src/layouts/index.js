import React from 'react';
import { siteMetadata } from '../../gatsby-config';
import NavigationBar from '../components/NavigationBar';
import emergence from 'emergence.js';

import './gatstrap.scss';
import 'prismjs/themes/prism-okaidia.css';
import 'devicon-2.2/devicon.min.css';
import 'font-awesome/css/font-awesome.css';

class Template extends React.Component {
  componentDidMount() {
    emergence.init();
  }

  componentDidUpdate() {
    emergence.init();
  }

  render() {
    return (
      <div>
        <NavigationBar title={siteMetadata.title} {...this.props} />
        { this.props.children() }
      </div>
    )
  }
}

export default Template;
