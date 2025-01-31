import style from './MyCertificates.module.scss'

const MyCertificates = () => {
    return (
        <div className={style.certificatesContainer}>
            <ul>
                <li>
                    <img width={350} src='my-certificates/certificate-htmlAcademy-frontend.webp' />
                </li>
                <li>
                    <img width={350} src='my-certificates/certificate-htmlAcademy-js.webp' />
                </li>
                <li>
                    <img width={350} src='my-certificates/certificate-htmlAcademy-html1.webp' />
                </li>
            </ul>
        </div>
    )
};

export default MyCertificates;