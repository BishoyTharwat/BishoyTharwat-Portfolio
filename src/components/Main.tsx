import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from "../assets/images/profilePic.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/BishoyTharwat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bishoy-tharwat/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bishoy Tharwat</h1>
          <p>Frontend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/BishoyTharwat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bishoy-tharwat/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;