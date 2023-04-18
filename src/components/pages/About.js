import React from 'react';
import '../styles/style.css';

const styles = {
  bgStyle: {
    background: '#13315c',
    color: 'white',
    fontSize: '30px',
    height: '80vh'
  },
  
  
};

export default function About() {
  return (
    <body style={styles.bgStyle} className="header">
    <div>
      <h1>About Page</h1>
      <p>
          Hi! I'm Christian. I am a full-stack developer who finished the coding bootcamp at UCI.
          All the projects in here are the ones that I created throughout my bootcamp plus all the projects I made after the bootcamp. 
          Everything will be available for viewing as link to deployed application will be added.
      </p>
    </div>
    </body>
  );
}
