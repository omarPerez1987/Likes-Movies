import React from 'react';
import logoLikes from './imagenes/logoL&M.png'

function Header() {
    return (
        <div className="header1">
            <img className='logo' alt='logo' src={logoLikes}></img>
        </div>
    )
}

export default Header