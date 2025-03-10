import { saveAs } from 'file-saver';
import style from './DownloadLetterButton.module.scss';

const DownloadLetterButton = () => {
    const handleDownloadEnglish = () => {
        const fileUrl = 'my-certificates/reference-letter-maxim-grigoryev-en.pdf';
        saveAs(fileUrl, 'reference-letter-maxim-grigoryev-eng.pdf');
    };

    const handleDownloadRussian = () => {
        const fileUrl = 'my-certificates/reference-letter-maxim-grigoryev-ru.pdf';
        saveAs(fileUrl, 'reference-letter-maxim-grigoryev-ru.pdf');
    };

    return (
        <div className={style.downloadBtnWrapper}>
            <button
                className={style.downloadBtn}
                onClick={handleDownloadEnglish}>Download reference letter (English language)
            </button>
            <button
                className={style.downloadBtn}
                onClick={handleDownloadRussian}>Download reference letter (Russian language)
            </button>
        </div>
    );
};

export default DownloadLetterButton;