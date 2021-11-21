import React from 'react';
import Link from 'next/link';

import MoreSidebarStyles from './MoreSidebar.module.scss';
import { SIDE_NAVIGATION_ITEMS } from '../../utils/constants';

const MoreSidebar = (): JSX.Element => {
  return (
    <div className={MoreSidebarStyles.moreSidebarContainer}>
      <div className="title">
        <h3>More on this site:</h3>
      </div>

      <div className="more-items">
        {
          SIDE_NAVIGATION_ITEMS.map((item, index) => {
            return (
              <div className={MoreSidebarStyles.sidebarItem} key={item.linkTo}>
                <Link href={item.linkTo}>
                  <a>
                    <span>{`${index + 1}. `}</span>
                    <span>{item.label}</span>
                  </a>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default MoreSidebar;