import React from 'react';
import { Code, Heart } from 'react-feather';

import { siteTitle } from '../../utils/constants';
import FooterStyles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={FooterStyles.footer}>
      <div className="container">
        <div className="col-md-12">
          <div className="d-none d-sm-block">
            <div className={FooterStyles.footerContent}>
              <Code size={22} className={FooterStyles.featherIcon} />
              <span> with </span>
              <Heart size={22} className={FooterStyles.featherIcon} />
              <span> using </span>
              <span className={`${FooterStyles.boldText} ${FooterStyles.marginedText}`}>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
              </span>
              <span> and </span>
              <span className={`${FooterStyles.boldText} ${FooterStyles.marginedText}`}>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJS</a>
              </span>
              <span> by </span>
              <a
                className={`${FooterStyles.boldText} ${FooterStyles.marginedText}`}
                target="_blank"
                href="https://github.com/prajapati-parth"
                rel="noreferrer"
              >
                Parth Prajapati
              </a>
            </div>
          </div>

          <div className="d-block d-sm-none">
            <div className={FooterStyles.footerContent}>
              <Code size={22} className={FooterStyles.featherIcon} />
              <span> with </span>
              <Heart size={22} className={FooterStyles.featherIcon} />
              <span> by </span>
              <a
                className={`${FooterStyles.boldText} ${FooterStyles.marginedText}`}
                target="_blank"
                href="https://github.com/prajapati-parth"
                rel="noreferrer"
              >
                {siteTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;