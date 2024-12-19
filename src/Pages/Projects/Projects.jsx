import { useState } from 'react';
import WebSitePreview from '../../components/WebSitePreview/WebSitePreview';
import myProjects from '../../DB/DB-myProjects';

import './Projects.scss';

const Projects = () => {
    // Стейт для отслеживания раскрытых проектов
    const [expandedProjects, setExpandedProjects] = useState({});

    // Функция для переключения состояния (раскрыть/скрыть стек)
    const toggleStack = (projectName) => {
        setExpandedProjects((prev) => ({
            ...prev, // Копируем существующий стейт
            [projectName]: !prev[projectName], // Инвертируем состояние для выбранного проекта
        }));
    };

    const SHOWED_STACK_NUMBER = 8;

    return (
        <section className='projects'>
            <div className="projects__container">
                <h2 className='visually-hidden'>My commercial projects</h2>
                <h3>Here are my commercial projects available for public display <b>(not covered by NDA):</b></h3>
                <ul className='projects__list'>
                    {myProjects.map((project) => {
                        const isExpanded = expandedProjects[project.projectName] || false;

                        return (
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
                                    <div>
                                        {/* Отображаем либо первые 7 технологии, либо весь стек */}
                                        {project.stack
                                            ?.slice(0, isExpanded ? undefined : SHOWED_STACK_NUMBER)
                                            .map((technology) => (
                                                <div className='projects__tech' key={technology}>
                                                    <p>{technology}</p>
                                                </div>
                                            ))}

                                        {/* Если технологий больше 7, показываем троеточие и кнопку */}
                                        {project.stack?.length > SHOWED_STACK_NUMBER && !isExpanded && <span className="projects__ellipsis">...</span>}

                                        {project.stack?.length > SHOWED_STACK_NUMBER && (
                                            <button
                                                className='projects__btn'
                                                onClick={() => toggleStack(project.projectName)}
                                                type='button'
                                            >
                                                {isExpanded ? 'Show less' : 'Show all stack'}
                                            </button>
                                        )}
                                    </div>
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
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}

export default Projects;