import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';  
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
            <p>
            I'm relatively new to the field of Software Engineering,
            but I've been actively enhancing my skills through 
            various online bootcamps and courses. 
            These educational experiences have provided me with a 
            solid foundation in coding, problem-solving, and 
            software development practices.
          </p>
          <p align="LEFT">
          My interest has particularly gravitated towards Front-End 
          Development. I enjoy the creative aspect of building user 
          interfaces and the immediate impact it has on the user 
          experience. The blend of design and technology in front-end
          work excites me, and I'm keen on diving deeper into this 
          area.
          </p>
          <p>
          In addition to front-end, I've also developed a strong 
          interest in Data Analysis. The ability to make data-driven 
          decisions and uncover insights from raw data fascinates me. 
          I'm eager to explore the intersection of data analysis and 
          software development as I continue my journey in tech.
          </p>
          </div>
        </div>
      </>      
    )
}
export default About 