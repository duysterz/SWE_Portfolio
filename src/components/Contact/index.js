import React, { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log(form.current);

    emailjs
    .sendForm('service_pbabwhy', 'template_m4fxsro', form.current, 'G8cLXydsLw9f25yaD')
    .then(
      () => {
        alert('Message successfully sent!');
        window.location.reload(false);
      },
      () => {
        alert('Failed to send the message, please try again');
      }
    )
  }
//need to work on this email thing
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p>
            Whether you're interested in discussing a new project, 
            exploring potential collaboration, or just want to learn more about my services, 
            I'd love to hear from you.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
