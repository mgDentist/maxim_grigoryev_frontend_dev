import MyExperience from "../../components/MyExperience/MyExperience";
import MyCertificates from "../../components/MyCertificates/MyCertificates";

import './MyPath.scss';

const MyPath = () => {
    return (
        <section className="about-me">
            <MyExperience />
            <MyCertificates />
        </section>
    );
}

export default MyPath;