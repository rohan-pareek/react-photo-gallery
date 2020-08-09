import React, { useState } from 'react';
import Progress from './Progress';

export default function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError(null);
        } else {
            setFile(null);
            setError('Select an image file (jpeg, jpg, png, gif)');
        }
    }


    return (
        <form className = "uploadForm">
            <label>
            <input type="file" onChange={handleChange} />
            <span>+</span>
            </label>
            {error && <div className="error">{error}</div>}
            {file && <div className="filename">{file.name}</div>}
            {file && <Progress file = {file} setFile = {setFile} />}
        </form>
    )
}
