import React from 'react';
import '../styles/style.css';

const styles = {
  headerStyle: {
    background: '#13315c',
    color: 'white',
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
    color: 'white',
    fontSize: '24px',
    height: '68vh',
    margin: '0'
  },
  footerStyle: {
    backgroundColor: '#8da9c4',
    height: '9vh',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default function Home() {
  return (
    <div>
      <div> <h1 style={styles.headerStyle}>My name is Christian Empalmado</h1> </div>
        <div style={styles.bodyStyle} className="header" id="homeDiv">
          <p>It's me and my dynamically created projects! </p>
          <p>I am a full-stack developer who finished the coding bootcamp at UCI.</p>
          <p>All the projects in here are the ones that I created throughout my bootcamp plus all the projects I made after the bootcamp. </p>
          <p>Everything will be available for viewing as link to deployed application will be added.</p>
          <p>I'm a creative person who loves to express myself through art and writing. </p>
          <p>Whether it's painting, drawing, or crafting, I find joy in the process of creating something from scratch.</p>      
      </div>
      <div style={styles.footerStyle}> © Christian Empalmado</div>
    </div>

  );
}
