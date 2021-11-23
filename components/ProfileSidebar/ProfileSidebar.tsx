import React from 'react';
import { GitHub, Linkedin, Mail, MapPin, Twitter } from 'react-feather';

import { siteTitle } from '../../utils/constants';
import ProfileSidebarStyles from './ProfileSidebar.module.scss';

const ProfileSidebar = (): JSX.Element => {
  return (
    <div className={ProfileSidebarStyles.aboutContainer}>
      <div className="col-xs-12">
        <div className={ProfileSidebarStyles.profileImageContainer}>
          <img
            width="160"
            height="160"
            alt="profile-image"
            src="https://avatars.githubusercontent.com/u/17194534?v=4"
          />
        </div>
      </div>

      <div className="col-xs-12">
        <div className={ProfileSidebarStyles.nameContainer}>
          <p className={ProfileSidebarStyles.name}>{siteTitle}</p>
          <p className={ProfileSidebarStyles.githubHandle}>
            <a
              href="https://github.com/prajapati-parth"
              target="_blank"
              rel="noreferrer"
            >
              @prajapati-parth
            </a>
          </p>
        </div>
      </div>

      <div className="col-xs-12">
        <div className={ProfileSidebarStyles.bioContainer}>
          <p>Curiously building great software.</p>
        </div>
      </div>

      <div className={ProfileSidebarStyles.locationContainer}>
        <div className="col-xs-12">
          <p className={ProfileSidebarStyles.location}>
            <MapPin size={22} className={ProfileSidebarStyles.featherIcon} />Pune, India
          </p>
        </div>
      </div>

      <div className={ProfileSidebarStyles.profileLinkContainer}>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <p className={`${ProfileSidebarStyles.profileLink} profileLink-github`}>
              <a
                href="https://github.com/prajapati-parth"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub size={22} className={ProfileSidebarStyles.featherIcon} />GitHub
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <p className={`${ProfileSidebarStyles.profileLink} profileLink-linkedin`}>
              <a
                href="https://www.linkedin.com/in/prajapatiparth"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={22} className={ProfileSidebarStyles.featherIcon} />LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <p className={`${ProfileSidebarStyles.profileLink} profileLink-twitter`}>
              <a
                href="https://twitter.com/iam_daparth"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={22} className={ProfileSidebarStyles.featherIcon} />Twitter
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <p className={`${ProfileSidebarStyles.profileLink} profileLink-email`}>
              <a
                href="mailto:parth17prajapati@gmail.com"
              >
                <Mail size={22} className={ProfileSidebarStyles.featherIcon} />Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar;