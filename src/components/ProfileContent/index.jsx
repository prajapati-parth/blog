import React from 'react'
import ReactGA from 'react-ga'
import { Card } from 'eureka-ui';

import { getExperience } from '../../utils'
import { gaId } from '../../utils/config'
import './styles.scss'

const AboutCardBody = () => {
  return (
    <div>
      <div className='bodySection'>
        <span>Hi it's Parth, from Ahmedabad, India. I'm a software enginner currently working</span>
        <ReactGA.OutboundLink
          className='profileCompany'
          eventLabel="profile-incapsulate"
          to="http://incapsulate.com/"
          target="_blank"
        >
          @Incapsulate
        </ReactGA.OutboundLink>
        <span>as a Full-stack developer.</span>
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
