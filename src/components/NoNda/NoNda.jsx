import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import WebSitePreview from '../../components/WebSitePreview/WebSitePreview';
import myProjects from '../../DB/DB-myProjects';

import '../../Pages/Projects/Projects.scss';

const NoNda = () => {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleStack = (projectName) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [projectName]: !prev[projectName],
        }));
    };

    const SHOWED_STACK_NUMBER = 8;

    return (
        <>
            <h2 className='visually-hidden'>
                Here are my commercial projects available for public display <b>(not covered by NDA):</b>
            </h2>
            <ul className="projects__list">
                {myProjects.map((project) => {
                    const isExpanded = expandedProjects[project.projectName] || false;

                    return (
                        <li className="projects__item"
                            key={project.projectName}>
                            <h4 className="projects__description">{project.projectName}</h4>
                            <div className="projects__stack-wrapper">
                                <div>
                                    {/* Анимация списка технологий */}
                                    <TransitionGroup>
                                        {project.stack
                                            ?.slice(0, isExpanded ? undefined : SHOWED_STACK_NUMBER)
                                            .map((technology) => (
                                                <CSSTransition
                                                    key={technology}
                                                    timeout={300}
                                                    classNames="fade"
                                                >
                                                    <div className="projects__tech">
                                                        <p>{technology}</p>
                                                    </div>
                                                </CSSTransition>
                                            ))}
                                    </TransitionGroup>

                                    {/* Троеточие */}
                                    {!isExpanded && project.stack?.length > SHOWED_STACK_NUMBER && (
                                        <span className="projects__ellipsis">...</span>
                                    )}

                                    {/* Кнопка */}
                                    {project.stack?.length > SHOWED_STACK_NUMBER && (
                                        <button
                                            className="projects__btn"
                                            onClick={() => toggleStack(project.projectName)}
                                            type="button"
                                        >
                                            {isExpanded ? 'Show less' : 'Show all stack'}
                                        </button>
                                    )}
                                </div>
                                <a
                                    className="projects__link"
                                    href={project.projectURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="projects__img-container">
                                        <WebSitePreview
                                            className="projects__img"
                                            url={project.projectURL}
                                            alt={`screen shot of ${project.projectName}`}
                                        />
                                    </div>
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default NoNda;