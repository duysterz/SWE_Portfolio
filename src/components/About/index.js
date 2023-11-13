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
            I've recently entered the software engineering domain, and I'm continuously sharpening my abilities through diverse bootcamps and educational courses. These programs have equipped me with robust knowledge in programming, tackling complex problems, and understanding the best practices in software creation.
          </p>
          <p align="LEFT">
          My enthusiasm is particularly strong for Front-End Development. I find the process of crafting user interfaces thrilling, as it combines artistic design with technological innovation, significantly affecting how users interact with a product. I am excited to delve further into this speciality.
          </p>
          <p>
          Moreover, Data Analysis has captured my interest. The prospect of drawing meaningful insights and guiding decisions based on data is intriguing to me. I am keen to delve into how data analysis can be integrated with software engineering to enhance technological solutions.
          </p>
          </div>
        </div>
      </>      
    )
}
export default About 