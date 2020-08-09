import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

export default function Progress({ file, setFile }) {

    const { progress, error, url } = useStorage(file);

    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <>
        {error && <div className = "error">{error}</div>}
        <div className="progress-bar-container">
            <span>{Math.ceil(progress)} %</span>
            <div className="progress-bar" style={{ width: progress + '%' }}>
                
            </div>
        </div>
        </>
    )
}
