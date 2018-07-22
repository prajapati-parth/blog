import React from 'react'
import ReactGA from 'react-ga'

import { gaId } from '../utils/config'

export default function withGaTracker(WrappedComponent) {
  const trackPage = page => {
    ReactGA.pageview(page)
  }

  const HOC = class extends React.Component {
    componentDidMount() {
      ReactGA.initialize(gaId)
      trackPage(this.props.location.pathname)
    }

    componentWillReceiveProps(newProps) {
      const currentPage = this.props.location.pathname
      const nextPage = newProps.location.pathname

      if (currentPage !== nextPage) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}
