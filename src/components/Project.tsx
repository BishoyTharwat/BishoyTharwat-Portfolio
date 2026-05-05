import React from "react";
import coligoWeb from '../assets/images/coligo-web.png';
import coligoMobile from '../assets/images/coligo-mobile.png';
import drjones from '../assets/images/dr-jones.png';
import pentab from '../assets/images/pentab.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Experience</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://coligolms.com/" target="_blank" rel="noreferrer"><img src={coligoWeb} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://coligolms.com/" target="_blank" rel="noreferrer"><h2>Coligo LMS Website</h2></a>
                <p>Developed scalable web applications using React.js, focusing on API integration and state management with Redux to enhance institutional management for nearly 100,000 students.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.coligotech.lms&hl=en" target="_blank" rel="noreferrer"><img src={coligoMobile} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.coligotech.lms&hl=en" target="_blank" rel="noreferrer"><h2>Coligo LMS Mobile App</h2></a>
                <p>Built cross-platform mobile experiences using React Native, implementing high-performance features and maintaining clean code for a seamless educational user experience.</p>
            </div>
            <div className="project">
                <a href="https://bishoytharwat.github.io/dr-johns-scheduler/" target="_blank" rel="noreferrer"><img src={drjones} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bishoytharwat.github.io/dr-johns-scheduler/" target="_blank" rel="noreferrer"><h2>Dr. John's Clinic</h2></a>
                <p>A responsive appointment scheduling interface built with React, showcasing clean UI design and professional state handling for healthcare service management.</p>
            </div>
            <div className="project">
                <a href="https://penta-b.com/Home.html" target="_blank" rel="noreferrer"><img src={pentab} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://penta-b.com/Home.html" target="_blank" rel="noreferrer"><h2>Penta-B GIS Solutions</h2></a>
                <p>Collaborated with GIS specialists to develop custom plugins and responsive front-end designs, integrating geospatial data and mapping features into enterprise solutions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;