import DownloadLetterButton from '../DownloadLetterButton/DownloadLetterButton';
import style from './MyExperience.module.scss';

const MyExperience = () => {
    return (
        <div
            className={style.expContainer}
        >
            <div
                className={style.expInnerContainer}
            >
                <h3>
                    <a href='https://ligaa.agency/'>Liga A</a>
                    &nbsp;— Intern (March 2024 – January 2025)
                </h3>
                <div>
                    <h4>Remote internship</h4>
                    <ul>
                        <li>Implemented commercials projects according to the company’s technical requirements and quality standards.</li>
                        <li>Collaborating with a team of developers, managers, and testers.</li>
                    </ul>
                </div>
                <div>
                    <h4>During this internship, I worked with:</h4>
                    <ul>
                        <li>React, Redux</li>
                        <li>JS (ES5, ES6)</li>
                        <li>HTML, PUG</li>
                        <li>CSS, SCSS, Less</li>
                        <li>BEM methodology</li>
                        <li>Git, GitHub</li>
                        <li>Gulp, Webpack, Vite</li>
                        <li>Figma, Pixso</li>
                        <li>Pixel Perfect</li>
                        <li>Various plugins and libraries</li>
                    </ul>
                </div>
                <div>
                    <h4>My responsibilities included:</h4>
                    <ul>
                        <li>Meeting the company’s quality criteria</li>
                        <li>Ensuring compatibility across different browsers and operating systems</li>
                        <li>Independently testing my own work</li>
                        <li>Creating interactive UI components (sliders, tabs, filtering and sorting, modal windows, and forms with validation and animation)</li>
                    </ul>
                </div>
                <DownloadLetterButton />
            </div>
            <div
                className={style.expInnerContainer}
            >
                <h3>
                    <span>Freelancer</span>
                    &nbsp;— Frontend Developer (March 2023 – Present)
                </h3>
                <div>
                    <h4>Remote job</h4>
                    <ul>
                        <li>Building websites and landing pages using HTML, CSS, and JavaScript, ensuring responsive design for various devices.</li>
                        <li>Editing and optimizing React applications, including the development and styling of individual components to enhance functionality and performance.</li>
                        <li>Integrating with APIs and setting up interactions between frontend and backend to ensure a seamless user experience.</li>
                        <li>Optimizing web application performance, including minimizing load times and improving interface responsiveness.</li>
                        <li>Ensuring cross-browser compatibility and conducting testing to identify and fix bugs.</li>
                        <li>Using version control systems (Git) to manage the codebase and collaborate with other developers.</li>
                        <li>Implementing pixel-perfect designs, maintaining layout accuracy and high-quality standards.</li>
                        <li>Automating development processes using linters and other tools to maintain code cleanliness and standardization.</li>
                        <li>Communicating with clients to clarify requirements, provide progress reports, and ensure satisfaction with the results.</li>
                    </ul>
                </div>
            </div>
            <div
                className={style.expInnerContainer}
            >
                <h3>
                    <a href='https://htmlacademy.ru/'>HTML Academy</a>
                    &nbsp;— Student (January 2023 – January 2024)
                </h3>
                <div>
                    <h4>Remote Education</h4>
                    <ul>
                        <li>Completed a remote Frontend Developer training program, encompassing three modules with project defenses based on the academy’s criteria (HTML1, HTML2, JavaScript).</li>
                        <li>Engaged in grading processes through initial project layouts and comprehensive skills assessments.</li>
                        <li>Accelerated learning by independently executing three projects, each spanning 3-4 weeks, which involved manual and automated testing, pixel-perfect design implementation, and the utilization of linters.</li>
                        <li>Successfully developed proficiency in HTML, CSS, JavaScript, and version control using Git, leading to the creation of responsive and high-quality web applications.</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default MyExperience;

