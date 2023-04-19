import React from 'react';
import '../styles/style.css';
import FilmFinder from '../images/project-01-film-finder.jpg';
import AnimeWorkout from '../images/Anime-Workout-Project-02.jpg';
import BeeMyFriend from '../images/project-03-bee-my-friend.jpg';



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
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
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
  imageStyle: {
    width: '300px',
    height: 'auto',
    
  },
  paragraph: {
    color: '#f0ebd8',
    fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',
    fontSize: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workItem: {
    flex: '0 0 30%'
  }
};

export default function Blog() {
  return (
    <div>
      <div style={styles.headerStyle} className="header">
        <h1>Projects</h1>
          <p  style={styles.paragraph}>These are the Projects me and my team created throughout my time in my bootcamp</p>
      </div>

      <div style={styles.bodyStyle} className="workFlex">
        <div style={styles.workItem}>
          <h4 style={styles.paragraph}>Film-Finder Project</h4>
          <a href="https://markkoos.github.io/Film-Finder-Project/">
            <img style={styles.imageStyle} src={FilmFinder} alt="Film-Finder-Project" />
          </a>
        </div>

        <div style={styles.workItem}>
          <h4>Anime-Workout Project</h4>
          <a href="https://desolate-bastion-22228.herokuapp.com/">
            <img style={styles.imageStyle} src={AnimeWorkout} alt="Anime-Workout" />
          </a>
        </div>

        <div style={styles.workItem}>
          <h4>Bee My Friend</h4>
          <a href="https://beemyfriend.herokuapp.com/">
            <img style={styles.imageStyle} src={BeeMyFriend} alt="Project 3" />
          </a>
        </div>

      </div>
    
      <div style={styles.footerStyle}> © Christian Empalmado</div>    
    </div>
  );
}
