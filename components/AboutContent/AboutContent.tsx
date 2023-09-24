import React from 'react';
import { Card } from 'eureka-ui';
import Link from 'next/link';

import { getExperience } from '../../utils';
import AboutContentStyles from './AboutContent.module.scss';

const AboutContent = (): JSX.Element => {
  return (
    <div className={AboutContentStyles.profileContentContainer}>
      <Card>
        <div>
          <div className={AboutContentStyles.bodySection}>
            <p>
              Hi it&apos;s Parth, from Pune, India. I&apos;m a software engineer currently working
            <a
              className={AboutContentStyles.profilePageLink}
              href="https://www.aeratechnology.com/"
              target="_blank"
              rel="noreferrer"
            >
              @Aera Technology
            </a>
             as a User Interface Engineer.</p>
          </div>
          <div className="bodySection">
            <p>
              {
                `With an experience of ${getExperience()} years in architecting,
                designing and developing solutions for growing business needs, I
                am focused on implementing advanced technologies and tools that
                enable me to build a magnitude of powerful apps in a quick and
                efficient manner. I've great inclination towards learning new tech
                and studying different architectures and am constantly working on
                brushing my skills.`
              }
          </p>
        </div>

        <div className="bodySection">
          <p>
            {
              `
                For a social cause, I'm working on building an educational platform that helps
                students by providing video lectures, notes and other study materials free of
                cost. You can know more about it
              `
            }
            <a href="https://educationlessons.co.in">here.</a>
          </p>
        </div>

        <div className='bodySection'>
          <p>Do check out my work on
          <Link href="/projects">
            <a className={AboutContentStyles.profilePageLink}>
              the projects page
            </a>
          </Link>
           and drop me a line if you find something interesting.</p>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default AboutContent;