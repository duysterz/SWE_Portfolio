import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Videos = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    axios.get('http://localhost:8080/video') // Make sure this URL matches your backend
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching videos:', error);
      });
  }, []);

  return (
    <div className="container videos-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['V', 'I', 'D', 'E', 'O', 'S']} 
            idx={15}
          />
        </h1>
      </div>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={video.vidID}>
            {video.vidURL ? 
              (video.vidURL.includes("youtube") ? 
                <iframe 
                  width="960" 
                  height="540" 
                  src={video.vidURL} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe> : 
                <a href={video.vidURL}>Google Drive Video</a>) : 
              <p>No Video URL</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
