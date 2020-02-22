import React from 'react';

import './styles.scss';

const moreItems = [
  {
    label: "Joining Aera Technology",
    link: "/joining-aera"
  },
  {
    label: "Creating a static page in Gatsby with filesystem data",
    link: "/static-page-in-gatsby"
  },
  {
    label: "Minimal React vs Create React App",
    link: "/minimal-react"
  },
  {
    label: "Creating a Hello World React application from scratch",
    link: "/react-hello-world"
  }
]

const MoreSidebar = () => {
  return (
    <div className="more-sidebar-container">
      <div className="title">
        <h3>More on this site:</h3>
      </div>

      <div className="more-items">
        {
          moreItems.map((item, index) => {
            return (
              <div className="sidebar-item" key={item.link}>
                <a href={item.link}>
                  <span>{`${index + 1}. `}</span>
                  <span>{item.label}</span>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MoreSidebar;