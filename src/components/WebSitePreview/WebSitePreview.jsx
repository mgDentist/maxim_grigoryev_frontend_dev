import { useEffect, useState } from "react";

import './WebSitePreview.scss';

// eslint-disable-next-line react/prop-types
const WebSitePreview = ({ url, alt, className }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [screenshot, setScreenshot] = useState(null);
    const [error, setError] = useState(null);

    const screenShotURL = `https://api.screenshotmachine.com?key=9449e8&url=${url}&dimension=1730x1076&delay=10000`;

    useEffect(() => {
        const fetchScreenShot = async () => {
            try {
                const response = await fetch(screenShotURL);
                if (!response.ok) {
                    throw new Error('fetch is not OK :(');
                }
                setScreenshot(screenShotURL);
                setError(null);
            }
            catch {
                setError('failed to load preview. Click here to view the site.');
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchScreenShot();
    }, []);

    if (isLoading) {
        return (
            <div className="loading">...Loading</div>
        )
    }

    if (error) {
        return (
            <div className="loading">{error}</div>
        )
    }

    return (
        <img
            className={className}
            src={screenshot}
            width='400'
            height='200'
            alt={alt}
            loading='lazy'
            onLoad={() => setIsLoading(false)}
            onError={() => setError('Failed to load image')}
        />
    )
};

export default WebSitePreview;