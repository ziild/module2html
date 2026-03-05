import React from 'react';
import profilePhoto from '../assets/images/profile.jpg';
import Card from "./Card";

function About() {
  return (
    <div className="container">
      <Card title="ABOUT ME">
        <img src={profilePhoto} alt="Profile photo" style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          objectFit: 'cover'
        }} />
        <p>
          I am a dedicated IT student specializing in Web Systems and
          Technologies. Passionate about creating efficient and user-friendly
          web applications, I strive to combine technical expertise with creative
          problem-solving.
        </p>

        <p>
          Email:
          <a href="mailto:blazezildjan123@gmail.com">
            blazezildjan123@gmail.com
          </a>
        </p>

        <p>
          GitHub:
          <a href="https://github.com/ziild" target="_blank" rel="noopener noreferrer">
            github.com/ziild
          </a>
        </p>
      </Card>
    </div>
  );
}

export default About;