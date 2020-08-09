import React from 'react';
import logo from '../assets/logo.png';

export default function Title() {
    return (
        <div className = "title">
            <div className = "logo">
                <img src = {logo} alt = "logo"/>
            </div>
            <h1>Create your customize photo gallery</h1>
        </div>
    )
}
