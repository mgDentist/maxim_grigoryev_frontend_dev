import { QRCodeSVG } from 'qrcode.react';

import logoQR from '../assets/logoMG.svg';

const StyledGitHubQR = () => {
    return (
        <div style={{ padding: '20px' }}>
            <QRCodeSVG
                value="https://github.com/mgDentist"
                size={256}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin={true}
                imageSettings={{
                    src: logoQR,
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true,
                }}
            />
            GitHub account
        </div>
    );
};

export default StyledGitHubQR;