import Head from 'next/head';
import { Card } from 'eureka-ui';

import { PROJECT_LIST, siteDescription, siteTitle, siteUrl, twitterHandle } from '../utils/constants';

const Projects = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Projects | {siteTitle}</title>
        <meta name="description" content="Projects created by Parth Prajapti" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${twitterHandle}`} />
        <meta property="og:title" content={`Projects | ${siteTitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/img/profile.png`} />
      </Head>

      <div className="row">
        {
          PROJECT_LIST.map(project => (
            <div className="col-sm-12 col-md-6" key={project.link}>
              <Card title={project.name} img={project.image} alt={project.name} click={() => window.open(project.link, '_blank')}>
                {project.description}
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;