import React from 'react';
import { Twitter, Facebook, Linkedin } from 'react-feather';

import { SOCIAL_MEDIA_TYPE, twitterShareText } from './constants';
import './styles.scss';

const socialMediaShareObj = {
  [SOCIAL_MEDIA_TYPE.TWITTER]: {
    postLink: 'https://twitter.com/intent/tweet?text=',
    getPostText: (url, title) => `${twitterShareText(title)} ${encodeURI(url)}`,
    component: Twitter
  },
  [SOCIAL_MEDIA_TYPE.LINKEDIN]: {
    postLink: 'https://www.linkedin.com/sharing/share-offsite?url=',
    getPostText: url => encodeURI(url),
    component: Linkedin
  },
  [SOCIAL_MEDIA_TYPE.FACEBOOK]: {
    postLink: 'https://www.facebook.com/sharer/sharer.php?u=',
    getPostText: url => `${encodeURI(url)}&amp;src=sdkpreparse`,
    component: Facebook
  }
};

const SocialMediaShare = ({type, url, title}) => {
  return (
    <div className="social-media-share-item-container">
      <h3>Share:</h3>
      <div className="share-items">
        {
          type.map(typeItem => {
            const socialMediaShareIdentifier = socialMediaShareObj[typeItem];
            return (
              <div className="item-container">
                <a
                  target="_blank"
                  href={`${socialMediaShareIdentifier.postLink}${socialMediaShareIdentifier.getPostText(url, title)}`}
                >
                  <socialMediaShareIdentifier.component />
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SocialMediaShare;