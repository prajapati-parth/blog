import React from 'react'
import { MapPin, Github, Linkedin, Twitter, Mail } from 'react-feather'

import './styles.scss'

class ProfileSideBar extends React.Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="col-xs-12">
          <div className="profileImageContainer">
            <img src="https://avatars6.githubusercontent.com/u/17194534" />
          </div>
        </div>

        <div className="col-xs-12">
          <div className="nameContainer">
            <p className="name">Parth Prajapati</p>
            <p className="githubHandle">
              <a target="_blank" href="https://github.com/prajapati-parth">
                @prajapati-parth
              </a>
            </p>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="bioContainer">
            <p>Curiously building great software.</p>
          </div>
        </div>

        <div className="locationContainer">
          <div className="col-xs-12">
            <p className="location">
              <MapPin size={22} className="featherIcon" />Ahmedabad, India
            </p>
          </div>
        </div>

        <div className="profileLinkContainer">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-github">
                <a target="_blank" href="https://github.com/prajapati-parth">
                  <Github size={22} className="featherIcon" />GitHub
                </a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-linkedin">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/prajapatiparth"
                >
                  <Linkedin size={22} className="featherIcon" />LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-twitter">
                <a target="_blank" href="https://twitter.com/iam_daparth">
                  <Twitter size={22} className="featherIcon" />Twitter
                </a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-email">
                <a href="mailto:parth17prajapati@gmail.com">
                  <Mail size={22} className="featherIcon" />Email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileSideBar
