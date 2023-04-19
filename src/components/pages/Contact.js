import React from 'react';
import '../styles/style.css';

const styles = {
  headerStyle: {
    background: '#13315c',
    color: '#f0ebd8',
    fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',
    fontSize: '40px',
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0'
  },
  bodyStyle: {
    background: '#0b2545',
    color: '#f0ebd8',
    fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',
    fontSize: '24px',
    height: '68vh',
    margin: '0'
  },
  footerStyle: {
    backgroundColor: '#8da9c4',
    color: '#003554',
    fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',
    fontSize: '18px',
    fontWeight: 'bold',
    height: '9vh',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    color: '#f0ebd8',
    fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',
    fontSize: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function Contact() {
  return (
    <div>
      
      <div style={styles.headerStyle} className="header">
        <h1 >Contact Page</h1>
      </div>

      <div style={styles.bodyStyle}> 
          <ul id="contactList">
            <li style={styles.paragraph}>Phone: (111)222-3333</li>
            <li><a style={styles.paragraph} href="cmempalmado@gmail.com">Email</a></li>
            <li><a style={styles.paragraph} href="https://github.com/cmempalmado">Github</a></li>
          </ul>      
      </div>

      <div style={styles.footerStyle}> © Christian Empalmado</div>
    </div>
  );
}