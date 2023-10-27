import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Images = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    axios.get('http://localhost:8080/photo') 
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching images:', error);
      });
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container images-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['I', 'M', 'A', 'G', 'E', 'S']}
            idx={15}
          />
        </h1>
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={image.photoID} onClick={() => handleClick(image)}>
            <img src={image.photoURL} alt={image.title} />
            <div className="overlay">{image.title}</div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="full-image" onClick={closeFullImage}>
          <img src={selectedImage.photoURL} alt={selectedImage.title} />
        </div>
      )}
    </div>
  );
};

export default Images;
