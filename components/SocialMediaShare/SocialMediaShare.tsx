import React from 'react';
import { socialMediaShareObj } from './constants';

import SocialMediaShareStyles from './SocialMediaShare.module.scss';

type SocialMediaShareProps = {
  type: string[],
  url: string,
  title: string,
};

const SocialMediaShare = (props: SocialMediaShareProps): JSX.Element => {
  const { type, url, title } = props;

  return (
    <div className={SocialMediaShareStyles.socialMediaShareItemContainer}>
      <h3>Share:</h3>
      <div className={SocialMediaShareStyles.shareItems}>
        {
          type.map(typeItem => {
            const socialMediaShareIdentifier = socialMediaShareObj[typeItem];
            const gotoUrl = `${socialMediaShareIdentifier.postLink}${socialMediaShareIdentifier.getPostText(url, title)}`;
            return (
              <div
                key={typeItem}
                className={SocialMediaShareStyles.itemContainer}
                onClick={() => {
                  window.open(gotoUrl, '_blank');
                }}
              >
                <a className={SocialMediaShareStyles.shareItem}>
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