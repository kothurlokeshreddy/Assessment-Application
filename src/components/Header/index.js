/* eslint-disable react/jsx-no-comment-textnodes */
import {Link, withRouter} from 'react-router-dom'
import { IoIosInformationCircleOutline } from "react-icons/io"
import {IoHome} from 'react-icons/io5'
import { BiTask } from "react-icons/bi";

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://www.fnmoney.ai/images/logo-white.png"
              alt="website logo"
            />
          </Link>
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://www.fnmoney.ai/images/logo-white.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <a href="https://www.linkedin.com/company/fnmoney/about/" target = "_blank" className="nav-link" rel="noreferrer">
                About
              </a>
            </li>

            <li className="nav-menu-item">
              <Link to="/assessment" className="nav-link">
                Assessment Tasks
              </Link>
            </li>

            <li className="nav-menu-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <IoHome style = {{color : '#000000', height : '23px', width : '23px'}}/>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="https://www.linkedin.com/company/fnmoney/about/" target = "_blank" className="nav-link" rel="noreferrer">
              <IoIosInformationCircleOutline  style = {{color : '#000000', height : '23px', width : '23px'}}/>
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/assessment" className="nav-link">
              <BiTask style = {{color : '#000000', height : '23px', width : '23px'}}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
