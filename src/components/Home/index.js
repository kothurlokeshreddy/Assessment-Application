import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Master Your Skills with Comprehensive Assessment Tasks</h1>
          <img
            src="https://t3.ftcdn.net/jpg/02/99/75/90/360_F_299759043_hBNLNxmxNV7MtFM0hGv2EJzx6yKVYfC6.jpg"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
          Welcome to your go-to platform for comprehensive assessment tasks. Whether you're a student, professional, or lifelong learner, our well-structured tasks are designed to help you master your skills and achieve your goals.
          </p>
          <Link to="/assessment">
            <button type="button" className="shop-now-button">
              Go To Assessment Tasks
            </button>
          </Link>
        </div>
        <img
          src="https://t3.ftcdn.net/jpg/02/99/75/90/360_F_299759043_hBNLNxmxNV7MtFM0hGv2EJzx6yKVYfC6.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
      <div className='contact' id = "contact">
        <div className='follow-info'>
          <div className='follow-us'>
            <h1>Follow Us</h1>
            <div>
              <div className='follow-icons'>
                <BsTwitterX className='icon'/>
              </div>
              <div className='follow-icons'>
                <BsInstagram  className='icon'/>
              </div>
              <div className='follow-icons'>
                <BsFacebook  className='icon'/>
              </div>
            </div>
          </div>
          <div className='info'>
            <img src = "https://www.fnmoney.ai/images/logo-white.png" alt = "website logo" className='contact-logo' />
            <p>contact@fnmoney.ai</p>
            <p>Bengaluru, Karnataka, 560035 IN</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
