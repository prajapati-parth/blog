import { Facebook, Linkedin, Twitter } from "react-feather";
import { SOCIAL_MEDIA_TYPE } from "../../utils/constants";
import { SocialMediaShareObjType } from "../../utils/types";

const twitterShareText = (title: string): string => `I read this great article on ${title}`;

export const socialMediaShareObj: SocialMediaShareObjType = {
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
}