import { useState, useEffect } from 'react';
import { fireStore } from '../firebase/config';

const useFireStore = (collection) => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        const unsubscribe = fireStore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let images = [];
            snap.forEach(doc => {
                images.push({...doc.data(), id: doc.id})
            })
            setImages(images)
        })

        return () => unsubscribe();
        
    }, [collection]);

    return { images };

}

export default useFireStore;