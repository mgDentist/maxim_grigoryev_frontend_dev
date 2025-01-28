import style from './UnderNda.module.scss';

const UnderNda = () => {
    return (
        <div className={style.ndaContainer}>
            <h2>Here are my experience with projects <b className={style.ndaBoldText}>covered by NDA</b></h2>
            <div className={style.ndaInnerContainer}>
                <ul>
                    <li> ReactJS, Redux</li>
                    <li>JS (ES5, ES6)</li>
                    <li> HTML, PUG</li>
                    <li>CSS, SCSS</li>
                    <li>BEM methodology</li>
                    <li>Git</li>
                    <li>Gulp, Webpack, Vite</li>
                    <li>Figma, Pixso</li>
                    <li>Various plugins and libraries</li>
                    <li>Meeting the company’s quality criteria</li>
                    <li>Ensuring compatibility across different browsers and operating systems</li>
                    <li>Independently testing my own work</li>
                    <li>Creating interactive UI components (sliders, tabs, filtering and sorting, modal windows, and forms with validation and animation)</li>
                    <li>Building websites and landing pages using HTML, CSS, and JavaScript, ensuring responsive design for various devices.</li>
                    <li>Editing and optimizing React applications, including the development and styling of individual components to enhance functionality and performance.</li>
                    <li>Integrating with APIs and setting up interactions between frontend and backend to ensure a seamless user experience.</li>
                    <li>Optimizing web application performance, including minimizing load times and improving interface responsiveness.</li>
                    <li>Ensuring cross-browser compatibility and conducting testing to identify and fix bugs.</li>
                    <li>Using version control systems (Git) to manage the codebase and collaborate with other developers.</li>
                    <li>Implementing pixel-perfect designs, maintaining layout accuracy and high-quality standards.</li>
                    <li>Automating development processes using linters and other tools to maintain code cleanliness and standardization.</li>
                    <li>Communicating with clients to clarify requirements, provide progress reports, and ensure satisfaction with the results.</li>
                    <li>Completed a remote Frontend Developer training program, encompassing three modules with project defenses based on the academy’s criteria (HTML1, HTML2, JavaScript).</li>
                    <li>Engaged in grading processes through initial project layouts and comprehensive skills assessments.</li>
                    <li>Accelerated learning by independently executing three projects, each spanning 3-4 weeks, which involved manual and automated testing, pixel-perfect design implementation, and the utilization of linters.</li>
                    <li>Successfully developed proficiency in HTML, CSS, JavaScript, and version control using Git, leading to the creation of responsive and high-quality web applications.</li>
                </ul>
            </div>
        </div>
    )
}

export default UnderNda;

