import React from 'react'
import { Code, Heart } from 'react-feather'
import './styles.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="col-md-12">
            <div className="d-none d-sm-block">
              <div className="footer-content">
                <Code size={22} className="featherIcon" />
                <span> with </span>
                <Heart size={22} className="featherIcon" />
                <span> using </span>
                <span className="boldText marginedText">
                  <a href="https://reactjs.org/">React</a>
                </span>
                <span> and </span>
                <span className="boldText marginedText">
                  <a href="https://www.gatsbyjs.org/">Gatsby</a>
                </span>
                <span> by </span>
                <a
                  className="boldText marginedText"
                  href="https://github.com/prajapati-parth"
                >
                  Parth Prajapati
                </a>
              </div>
            </div>

            <div className="d-block d-sm-none">
              <div className="footer-content">
                <Code size={22} className="featherIcon" />
                <span> with </span>
                <Heart size={22} className="featherIcon" />
                <span> by </span>
                <a
                  className="boldText marginedText"
                  href="https://github.com/prajapati-parth"
                >
                  Parth Prajapati
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
