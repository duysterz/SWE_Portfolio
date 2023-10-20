import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 4000);
  // }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hello,</span>
            <br />
            <span className={`${letterClass} _13`}>I'm Duy Le</span>
          </h1>
          <h2> Software Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
