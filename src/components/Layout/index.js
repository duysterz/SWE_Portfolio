import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  const location = useLocation();
  const hideTags = ['/images', '/videos', '/stocks']; 

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {!hideTags.includes(location.pathname) && <span className="tags top-tags">&lt;body&gt;</span>}

        <Outlet />

        {!hideTags.includes(location.pathname) && (
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Layout;
