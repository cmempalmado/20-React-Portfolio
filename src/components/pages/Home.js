import React from 'react';
import '../styles/style.css';

const styles = {
  bgStyle: {
    background: '#192F66',
    color: 'white'
  }
};

export default function Home() {
  return (
    <div style={styles.bgStyle} className="header">
      <h1>Home Page</h1>
      <p>
        I am Christian Empalmado. It's me and my dynamically created projects!
      </p>
    </div>
  );
}
