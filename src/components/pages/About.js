import React from 'react';

const styles = {
  bgStyle: {
    background: '#192F66',
    color: 'white'
  }
};

export default function About() {
  return (
    <body style={styles.bgStyle}>
    <div>
      <h1>About Page</h1>
      <p>
          Hi! I'm Christian. I am going to be a full-stack developer as I finish my bootcamp at UCI.
          Here you can see all the projects that I will create as I continue learning how to be a full-stack developer.
      </p>
    </div>
    </body>
  );
}
