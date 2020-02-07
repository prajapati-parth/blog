import React from 'react'
import { MapPin, GitHub, Linkedin, Twitter, Mail } from 'react-feather'
import ReactGA from 'react-ga'

import { gaId, profileImg } from '../../utils/config'
import './styles.scss'

class ProfileSideBar extends React.Component {
  componentDidMount() {
    ReactGA.initialize(gaId)
  }

  render() {
    return (
      <div className="aboutContainer">
        <div className="col-xs-12">
          <div className="profileImageContainer">
            <img src={profileImg} />
          </div>
        </div>

        <div className="col-xs-12">
          <div className="nameContainer">
            <p className="name">Parth Prajapati</p>
            <p className="githubHandle">
              <ReactGA.OutboundLink
                eventLabel="sidebar-github-profile-link"
                to="https://github.com/prajapati-parth"
                target="_blank"
              >
                @prajapati-parth
              </ReactGA.OutboundLink>
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
              <MapPin size={22} className="featherIcon" />Pune, India
            </p>
          </div>
        </div>

        <div className="profileLinkContainer">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-github">
                <ReactGA.OutboundLink
                  eventLabel="sidebar-social-github-profile-link"
                  to="https://github.com/prajapati-parth"
                  target="_blank"
                >
                  <GitHub size={22} className="featherIcon" />GitHub
                </ReactGA.OutboundLink>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-linkedin">
                <ReactGA.OutboundLink
                  eventLabel="sidebar-social-linkedin-profile-link"
                  to="https://www.linkedin.com/in/prajapatiparth"
                  target="_blank"
                >
                  <Linkedin size={22} className="featherIcon" />LinkedIn
                </ReactGA.OutboundLink>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-twitter">
                <ReactGA.OutboundLink
                  eventLabel="sidebar-social-twitter-profile-link"
                  to="https://twitter.com/iam_daparth"
                  target="_blank"
                >
                  <Twitter size={22} className="featherIcon" />Twitter
                </ReactGA.OutboundLink>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <p className="profileLink profileLink-email">
                <ReactGA.OutboundLink
                  eventLabel="sidebar-social-mail-profile-link"
                  to="mailto:parth17prajapati@gmail.com"
                >
                  <Mail size={22} className="featherIcon" />Email
                </ReactGA.OutboundLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileSideBar
