import "@fortawesome/free-regular-svg-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiGit,
  SiShadcnui,
} from "react-icons/si";

import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const frontendLabels = [
  "React.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "SASS",
  "Bootstrap",
  "Vite",
  "Git",
  "Agile",
];

const backendLabels = ["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs"];
type TechIconProps = {
  icon: React.ReactNode;
  name: string;
};
function Expertise() {
  const TechIcon = ({ icon, name }: TechIconProps) => (
    <div className="tech-icon">
      {icon}
      <span>{name}</span>
    </div>
  );
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Frontend & Mobile Section */}
          <div className="skill">
            <div className="icons-grid">
              <TechIcon icon={<SiReact color="#61DAFB" />} name="React.js" />
              <TechIcon
                icon={<SiTypescript color="#3178C6" />}
                name="TypeScript"
              />
              <TechIcon
                icon={<SiTailwindcss color="#06B6D4" />}
                name="Tailwind"
              />
              <TechIcon icon={<SiMui color="#007FFF" />} name="MUI" />
              <TechIcon
                icon={<SiShadcnui color="#ffffff" />}
                name="shadcn/ui"
              />
              <TechIcon
                icon={<SiBootstrap color="#7952B3" />}
                name="Bootstrap"
              />
              <TechIcon icon={<SiGit color="#F05032" />} name="Git" />
              <TechIcon icon={<SiGithub color="#ffffff" />} name="GitHub" />
              <TechIcon icon={<SiNodedotjs color="#339933" />} name="Node.js" />
              <TechIcon
                icon={<SiExpress color="#ffffff" />}
                name="Express.js"
              />
            </div>

            <h3>Frontend Development</h3>
            <p>
              Experienced Developer specializing in building high-performance
              web and mobile applications. I focus on integrating complex APIs,
              managing scalable state with Redux Toolkit, and delivering clean,
              responsive designs across platforms. With a background in
              Engineering from Cairo University, I prioritize SDLC principles
              and SOLID patterns.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Backend Section (Currently Studying) */}
          <div className="skill">
            <h3>Full-Stack Growth</h3>
            <p>
              Currently expanding into backend architecture through specialized
              study in the Node.js ecosystem. I am developing proficiency in
              system architecture, relational database management, and building
              secure server-side logic to complement my frontend expertise.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focusing on:</span>
              {backendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
