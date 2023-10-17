import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/Hang-Loose-Black-Circle.png';




const Sidebar = () => <>Hello from sidebar</>

//   const [showNav, setShowNav] = useState(false);

//   return (
//     <div className="nav-bar">
//       <Link 
//         className="logo"
//         to="/"
//         onClick={() => setShowNav(false)}>
//         <img src={Logo} alt="Logo" />
//         <img className="Logo" src={Logo} alt="Logo" />
//       </Link>
//       <nav className={showNav ? 'mobile-show' : ''}>
//         <NavLink 
//           exact="true"
//           activeclassname="active"
//           to="/"
//           onClick={() => setShowNav(false)}>
//           <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//         </NavLink>
//         <NavLink 
//           activeclassname="active"
//           className="about-link"
//           to="/about"
//           onClick={() => setShowNav(false)}>
//           <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//           activeclassname="active"
//           className="portfolio-link"
//           to="/portfolio"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//           activeclassname="active"
//           className="contact-link"
//           to="/contact"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//         </NavLink>
//         <FontAwesomeIcon 
//           onClick={() => setShowNav(false)}
//           icon={faClose}
//           color="#ffd700"
//           size="3x"
//           className='close-icon' />
//       </nav>
//       <ul>
//         <li>
//           <a
//             href="https://www.linkedin.com/in/duy-le-2b0068159/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/duysterz"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.youtube.com/@duysterz5378"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <FontAwesomeIcon
//               icon={faYoutube}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//       </ul>
//       <FontAwesomeIcon 
//           onClick={() => setShowNav(true)}
//           icon={faBars}
//           color="#ffd700"
//           size="3x"
//           className='hamburger-icon' />
//     </div>
//   )
// }

export default Sidebar
