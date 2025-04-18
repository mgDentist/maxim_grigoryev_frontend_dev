import style from './MyCertificates.module.scss'

const MyCertificates = () => {
    return (
        <div className={style.certificatesContainer}>
            <ul>
                <li>
                    <img width={350} src='my-certificates/certificate-htmlAcademy-frontend.webp' alt='HTML Academy Frontend course certificate' loading='lazy'/>
                </li>
                <li>
                    <img width={350} src='my-certificates/certificate-htmlAcademy-js.webp' alt='HTML Academy JS course certificate' loading='lazy'/>
                </li>
                <li>
                    <img width={350} src='my-certificates/certificate-htmlAcademy-html1.webp' alt='HTML Academy HTML1 course certificate' loading='lazy'/>
                </li>
            </ul>
        </div>
    )
};

export default MyCertificates;