import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/Hang-Loose-Black-Circle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBars, faClose, faImage, faFilm, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className='nav-bar'>
        <Link 
        className='logo' 
        to='/'
        onClick={() => setShowNav(false)}>
            <img src={Logo} alt="logo" />
            <div className='logo-text'>Duy Anh Le</div>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="images-link"  
          to="/images"  
          onClick={() => setShowNav(false)}
        >
      <FontAwesomeIcon icon={faImage} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="videos-link"  
          to="/videos"  
          onClick={() => setShowNav(false)}
        >
      <FontAwesomeIcon icon={faFilm} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="stocks-link"  
          to="/stocks"  
          onClick={() => setShowNav(false)}
        >
      <FontAwesomeIcon icon={faChartColumn} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/duy-le-2b0068159/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/duysterz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@duysterz5378"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar