import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'; 
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const helloArray = ['H', 'e', 'l', 'l', 'o', ' ', ','];
  const nameArray = ['I', "'", 'm', ' ', 'D', 'u', 'y', ' ', 'L', 'e'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              idx={6}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
          </h1>
          <h2>Software Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
   );
  };
  
  export default Home;
