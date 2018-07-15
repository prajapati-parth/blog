import React from 'react'

import { getExperience } from '../../utils'
import './styles.scss'

class ProfileContent extends React.Component {
  render() {
    return (
      <div className="profileContentContainer">
        <div className="card profileCard">
          <div className="card-header">About</div>
          <div className="card-body">
            <p className="card-text">
              Hi it's Parth, from Ahmedabad, India. I'm a software enginner
              currently working&nbsp;
              <a target="_blank" href="http://incapsulate.com/">
                @Incapsulate
              </a>&nbsp; as a Full-stack developer.
              <br />
              <br />
              With an experience of {getExperience()} years in architecting,
              designing and developing solutions for growing bussiness needs, I
              am focused on implementing advanced technologies and tools that
              enable me to build a magnitude of powerful apps in a quick and
              efficient manner. I've great inclination towards learning new tech
              and studying different architectures and am constantly working on
              brushing my skills.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Works</div>
          <div className="card-body">
            <p className="card-text">
              <ul className="work">
                <li className="workItem">
                  <a
                    target="_blank"
                    href="https://prajapati-parth.github.io/gitlly/"
                  >
                    Gitlly
                  </a>
                  <span class="badge badge-primary">react</span>
                  <span class="badge badge-primary">electron</span>
                </li>
                <li className="workItem">
                  <a
                    target="_blank"
                    href="https://www.npmjs.com/package/minimal-react"
                  >
                    Minimal React
                  </a>
                  <span class="badge badge-primary">node</span>
                  <span class="badge badge-primary">cli</span>
                  <span class="badge badge-primary">npm</span>
                </li>
                <li className="workItem">
                  <a
                    target="_blank"
                    href="https://prajapati-parth.github.io/eureka-ui/"
                  >
                    Eureka UI
                  </a>
                  <span class="badge badge-primary">react</span>
                </li>
                {/* <li>
                    <a href="https://github.com/prajapati-parth/club">Club</a><Label>angular2</Label><Label>angular-material</Label>
                </li>
                <li>
                    <a href="https://github.com/prajapati-parth/glitchy">Glitchy</a><Label>react</Label><Label>electron</Label>
                </li>
                <li>
                    <a href="https://github.com/prajapati-parth/prajapati-parth.github.io">Code Sceptre</a><Label>react</Label><Label>github-pages</Label>
                </li>
                <li>
                    <span>Jabber</span><Label>angular2</Label><Label>electron</Label>
                </li> */}
              </ul>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileContent
