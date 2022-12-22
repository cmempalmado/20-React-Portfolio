import React from 'react';
import '../styles/style.css';
import FilmFinder from '../../images/project-01-film-finder.jpg';



const styles = {
  bgStyle: {
    background: '#192F66',
    color: 'white',
    
  }
};

export default function Blog() {
  return (
    <div style={styles.bgStyle} className="header">
      <h1>Projects</h1>
      <p>
        These are the Projects me and my team created throughout my time in my bootcamp
      </p>
      <div style={styles.bgStyle} class="workFlex">
      

                        <div class="Work1">
                            <h4>Film-Finder Project</h4>
                            <a href="https://markkoos.github.io/Film-Finder-Project/">
                                <img src='FilmFinder' alt="Film-Finder-Project"/>
                                  
                            </a>    
                        </div>
                        <div class="Work2">
                            <h4>Anime-Workout Project</h4>

                            <a href="https://desolate-bastion-22228.herokuapp.com/">
                                <img src="../../images/Anime-Workout-Project-02.jpg" alt="Anime-Workout">
                                </img>
                                
                            </a>    
                                
                        </div>
                        <div class="Work2">
                            <h4>Bee My Friend</h4>

                            <a href="https://beemyfriend.herokuapp.com/">
                                <img src="images/project-03-bee-my-friend.jpg" alt="Project 3">
                                </img>
                            </a>    
                                
                        </div>
                      
                    </div>

    </div>
    
  );
}
