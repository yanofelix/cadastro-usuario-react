import './Logo.css'
import React from 'react'
import Logo from '../../assets/imgs/logorola.png'

export default props => {
    return <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo"/>
        </a>
    </aside>
}