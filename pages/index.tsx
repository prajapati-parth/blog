import Head from 'next/head';
import type { NextPage } from 'next';

import { AboutContent } from '../components/AboutContent';
import { ProfileSideBar } from '../components/ProfileSidebar';
import { siteDescription, siteTitle, siteUrl, twitterHandle } from '../utils/constants';

const IndexPage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Profile | {siteTitle}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${twitterHandle}`} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={`${siteUrl}/profile`} />
        <meta property="og:image" content={`${siteUrl}/img/profile.png`} />
      </Head>
      
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <ProfileSideBar />
        </div>
        <div className="col-xs-12 col-sm-8">
          <AboutContent />
        </div>
      </div>
    </div>
  )
}

export default IndexPage;