import style from './MyCertificates.module.scss'

const MyCertificates = () => {
    return (
        <div className={style.certificatesContainer}>
            <ul>
                <li>
                    <img width={350} src='/public/sertificates/sertificate-htmlAcademy.jpg' />
                </li>
                <li>
                    <img width={350} src='/public/sertificates/sertificate-htmlAcademy-js_page-0001.jpg' />
                </li>
                <li>
                    <img width={350} src='/public/sertificates/certificate-htmlAcademy-html1_page-0001.jpg' />
                </li>
            </ul>
        </div>
    )
};

export default MyCertificates;