import React from 'react'
import ReactGA from 'react-ga'
import { Card } from 'eureka-ui';
import { navigateTo } from 'gatsby-link';

import { getExperience } from '../../utils'
import { gaId } from '../../utils/config'
import './styles.scss'

const AboutCardBody = () => {
  return (
    <div>
      <div className='bodySection'>
        <span>Hi it's Parth, from Pune, India. I'm a software engineer currently working</span>
        <ReactGA.OutboundLink
          className='profile-page-link'
          eventLabel="profile-incapsulate"
          to="https://www.aeratechnology.com/"
          target="_blank"
        >
          @Aera Technology
        </ReactGA.OutboundLink>
        <span>as a User Interface Engineer.</span>
      </div>
      <div className='bodySection'>
        <span>
          {
            `With an experience of ${getExperience()} years in architecting,
            designing and developing solutions for growing bussiness needs, I
            am focused on implementing advanced technologies and tools that
            enable me to build a magnitude of powerful apps in a quick and
            efficient manner. I've great inclination towards learning new tech
            and studying different architectures and am constantly working on
            brushing my skills.`
          }
        </span>
      </div>

      <div className='bodySection'>
        <span>
          {
            `
              For a social cause, I'm working on building an educational product that helps
              students by providing video lectures, notes and other study materials free of
              cost. You can know more about it
            `
          }
        </span>
        <a href="https://educationlessons.co.in">here.</a>
      </div>

      <div className='bodySection'>
        <span>Do check out my work on</span>
        <a
          className="profile-page-link"
          onClick={() => {
            ReactGA.event({
              category: 'Profile page',
              action: 'Click link',
              label: 'the projects page'
            })
            navigateTo("/projects/")
          }}
        >
          the projects page 
        </a>
        <span>and drop me a line if you find something interesting.</span>
      </div>
    </div>
  )
};

class ProfileContent extends React.Component {
  componentDidMount() {
    ReactGA.initialize(gaId)
  }

  render() {
    return (
      <div className="profileContentContainer">
        <Card title='About'>
          <AboutCardBody />
        </Card>
      </div>
    )
  }
}

export default ProfileContent
