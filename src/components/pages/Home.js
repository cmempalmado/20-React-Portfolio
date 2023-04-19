import React from 'react';
import '../styles/style.css';

const styles = {
  headerStyle: {
    background: '#13315c',
    color: '#f0f3bd',
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
    color: '#f0f3bd',
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
  }
};

export default function Home() {
  return (
    <div>

      <div> 
        <h1 style={styles.headerStyle}>Hi! I am Christian Empalmado</h1> 
      </div>

        <div style={styles.bodyStyle} className="header" id="homeDiv">
          <p>Here you will find all my dynamically created projects! </p>
          <p>I am a full-stack developer who finished the coding bootcamp at UCI.</p>
          <p>All the projects that you will see in here are a combination of all the projects I made during and after the coding bootcamp. </p>
          <p>Hence, the improvements I gained are highly noticeable.</p>
          <p>Everything will be available for viewing as link to deployed application are added.</p>
          <p>I'm a creative person who loves to express myself through art and writing. </p>
          <p>Whether it's painting, drawing, or especially coding, I find joy in the process of creating something from scratch.</p>      
      </div>

      <div style={styles.footerStyle}> © Christian Empalmado</div>
    </div>

  );
}
