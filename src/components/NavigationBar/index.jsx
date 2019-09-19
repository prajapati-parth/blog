import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

import { NAVIGATION_ITEMS } from './constants'

class NavigationBar extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <nav className="navbar navbar-expand flex-column flex-md-row">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              {
                NAVIGATION_ITEMS.map(item => {
                  const activeItemClass = location.pathname === item.linkTo ? 'active' : '';

                  return (
                    <li className={`nav-item ${activeItemClass}`} key={item.label}>
                      <Link to={item.linkTo} className="nav-link">{item.label}</Link>
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
}

export default NavigationBar
