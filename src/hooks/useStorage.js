import { useState, useEffect } from 'react';
import { storage, fireStore, timestamp } from '../firebase/config';

const useStorage = (file) => {

    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {

        const reference = storage.ref(file.name);
        const fireStoreRef = fireStore.collection('my-images');
        reference.put(file).on('state_changed', (snap) => {
            const percentage = snap.bytesTransferred / snap.totalBytes * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await reference.getDownloadURL();
            fireStoreRef.add({
                url: url,
                createdAt: timestamp()
            })
            setUrl(url);
        })

    }, [file]);

    return { progress, error, url };
}

export default useStorage;