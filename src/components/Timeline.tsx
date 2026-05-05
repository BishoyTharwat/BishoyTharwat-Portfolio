import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Current Job */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              React & React Native Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Coligo | El-Maadi, Cairo
            </h4>
            <p>
              Building web and mobile applications using React.js and React Native.
              Integrating APIs, improving performance, and managing state using Redux
              and Context API within Agile teams.
            </p>
          </VerticalTimelineElement>

          {/* Penta-b */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2023 - Jul 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Penta-b | Nasr City, Cairo
            </h4>
            <p>
              Developed scalable front-end solutions and custom plugins.
              Collaborated with GIS specialists to integrate geospatial data,
              managed state with Redux, and maintained clean, responsive UI.
            </p>
          </VerticalTimelineElement>

          {/* Diploma instead of "intern" */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Eraa Soft | EL-Dokki
            </h4>
            <p>
              Intensive training in frontend development covering HTML, CSS,
              JavaScript, and React. Built real-world projects and learned
              best practices in UI development.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;