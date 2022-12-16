import React from 'react';

const styles = {
  bgStyle: {
    background: '#192F66',
    color: 'white'
  }
};

export default function Blog() {
  return (
    <div style={styles.bgStyle}>
      <h1>Projects</h1>
      <p>
        These are the Projects me and my team created throughout my time in my bootcamp
      </p>
    </div>
  );
}
