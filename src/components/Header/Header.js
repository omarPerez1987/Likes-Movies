import React from 'react';
import logoLikes from '../imagenes/logoL&M.png'
import './Header.css'

function Header() {
    return (
        <header>
            <div className="item1">
                <img className='logo' alt='logo' src={logoLikes}></img>
            </div>
            <div>
                <a className='inicio-sesion' href='/'>Inicio sesión</a>
            </div>
        </header>
    )
}

export default Header