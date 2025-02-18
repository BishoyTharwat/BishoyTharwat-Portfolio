import React from "react";
import mock09 from '../assets/images/profilePic.png';
import mock10 from '../assets/images/profilePic.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www......" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www...../" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed ................</p>
            </div>
            <div className="project">
                <a href="https://...." target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://......." target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed,.......</p>
            </div>
        </div>
    </div>
    );
}

export default Project;