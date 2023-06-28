import { projects } from '../../../constants';
import { ProjectCard } from '../../elements';
import './projects.css';

function Projects() {
    return (
        <div className='projects-wrapper'>
            <div className='project-title'>
                <h2>Projects</h2>
                <div className='title-line'></div>
            </div>
            <div className='projects-container'>
                {projects.map(project => {
                    return <ProjectCard project={project} key={project.name} />
                })}
            </div>
        </div>
    );
}

export default Projects;