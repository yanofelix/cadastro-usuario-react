import './Logo.css'
import React from 'react'
import Logo from '../../assets/imgs/logorola.png'
import {Link} from 'react-router-dom'

export default props => {
    return <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo"/>
        </Link>
    </aside>
}