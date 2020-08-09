import React from 'react'
import useFireStore from '../hooks/useFireStore'

export default function ImageGrid({setSrc}) {
    
    const {images} = useFireStore('my-images');

    return (
        <div className = "image-grid">
            {images && images.map(image => (
                <div key = {image.id} className = "image-wrapper" onClick = {() => setSrc(image.url)}>
                    <img src = {image.url} alt = "file" />
                </div>
            ))}
        </div>
    )
}
