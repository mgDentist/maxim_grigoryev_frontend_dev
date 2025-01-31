import { saveAs } from 'file-saver';
import style from './DownloadLetterButton.module.scss';

const DownloadLetterButton = () => {
    const handleDownload = () => {
        const fileUrl = 'my-certificates/reference-letter-maxim-grigoryev.pdf';
        saveAs(fileUrl, 'reference-letter-maxim-grigoryev.pdf');
    };

    return (
        <div className={style.downloadBtnWrapper}>
            <button 
            className={style.downloadBtn}
            onClick={handleDownload}>Download reference letter (Russian language)</button>
        </div>
    );
};

export default DownloadLetterButton;