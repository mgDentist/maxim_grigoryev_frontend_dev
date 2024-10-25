import WebSitePreview from '../../components/WebSitePreview/WebSitePreview';
import myProjects from '../../DB/DB-myProjects';

import './Projects.scss';

const Projects = () => {
    return (
        <section className='projects'>
            <div className="projects__container">
                <h2 className='visually-hidden'>My commercial projects</h2>
                <h3>Here are my commercial projects available for public display <b>(not covered by NDA):</b></h3>
                <ul className='projects__list'>
                    {myProjects.map((project) => (
                        <li
                            className='projects__item'
                            key={project.projectName}
                        >
                            <h4
                                className='projects__description'
                            >
                                {project.projectName}
                            </h4>
                            <div className='projects__stack-wrapper'>
                                <ul>
                                    {project.stack?.map((technology) => (
                                        <li
                                            className='projects__tech'
                                            key={technology}
                                        >
                                            <p>{technology}</p>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    className='projects__link'
                                    href={project.projectURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* {project.projectURL} */}
                                    <div
                                        className='projects__img-container'
                                    >
                                        <WebSitePreview
                                            className='projects__img'
                                            url={project.projectURL}
                                            alt={`screen shot of ${project.projectName}`}
                                        />
                                    </div>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects;