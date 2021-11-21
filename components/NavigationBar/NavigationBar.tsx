import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import  navigationBarStyles from './NavigationBar.module.scss';
import { NAVIGATION_ITEMS, siteTitle } from '../../utils/constants';

const NavigationBar = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className={`navbar navbar-expand flex-column flex-md-row ${navigationBarStyles.navbar}`}>
      <div className="container">
        <Link href="/">
          <a className="text-center">
            <h1 className={`navbar-brand mb-0 ${navigationBarStyles.navbarBrand}`}>{siteTitle}</h1>
          </a>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            {
              NAVIGATION_ITEMS.map(item => {
                const activeItemClass = router.pathname === item.linkTo ? navigationBarStyles.active : '';

                return (
                  <li className={`nav-item ${activeItemClass} ${navigationBarStyles.navItem}`} key={item.label}>
                    <Link href={item.linkTo}>
                      <a className="nav-link">{item.label}</a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  )
}

export default NavigationBar;