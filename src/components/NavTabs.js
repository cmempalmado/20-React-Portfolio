import React from 'react';

const styles = {
    bgStyle: {
      background: '#134074',
      fontFamily: 'Comic Sans MS',
      color: '#ffb703'
    },
    fontStyle: {
      color: '#ffb703'
    }
    
  };

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.bgStyle} className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          style={styles.fontStyle}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#skills"
          onClick={() => handlePageChange('Skills')}
          style={styles.fontStyle}
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          style={styles.fontStyle}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          style={styles.fontStyle}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;