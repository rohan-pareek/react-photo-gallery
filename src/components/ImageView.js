import React from 'react'

export default function ImageView({src, setSrc}) {

    const closeModal = (e) => {
        if(e.target.classList.contains('image-view-overlay')) { // close modal only on click of overlay
            setSrc(null);
        }
    }
    return (
        <div className = "image-view-overlay" onClick = {closeModal}>
                <img src = {src} alt = "File" />
        </div>
    )
}
