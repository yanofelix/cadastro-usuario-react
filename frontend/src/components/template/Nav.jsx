import './Nav.css'
import React from 'react'
import NavItem from './NavItems'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
           <NavItem href="/" icon="home" title="Início"/>
           <NavItem href="/Users" icon="users" title="Usuário"/>

        </nav>
    </aside>