// About.js
import React from 'react';

function About({ logoUrl, aboutText,bloglogo }) {
  return (
    <aside>
      <img src={logoUrl} alt={bloglogo} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
