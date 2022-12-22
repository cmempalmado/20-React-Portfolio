import React from 'react';
import '../styles/style.css';

const styles = {
  bgStyle: {
    background: '#192F66',
    color: 'white'
  }
};

export default function Contact() {
  return (
    <div style={styles.bgStyle} className="header">
      <h1 >Contact Page</h1>
      <nav style={styles.bgStyle}>
          <ul id="contactList">
            <li>Phone: (111)222-3333</li>
            <li><a href="cmempalmado@gmail.com">Email</a></li>
            <li><a href="https://github.com/cmempalmado">Github</a></li>
          </ul>
      </nav>
    </div>
  );
}
