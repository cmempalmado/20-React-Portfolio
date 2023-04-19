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
    margin: '0',
    paddingLeft: '150px'
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

export default function About() {
  return (
    <body>
    <div>
        <div >
          <h1 style={styles.headerStyle}>Skills</h1>
        </div>

        <div style={styles.bodyStyle}>
      <li>HTML </li>
      <li>CSS </li>
      <li>Javascript </li>
      <li>C++ </li> 
      <li>Java </li>     
      
      </div>
      <div style={styles.footerStyle}> © Christian Empalmado</div>
    </div>
    </body>
  );
}