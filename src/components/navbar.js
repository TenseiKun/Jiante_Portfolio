import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


const NavBar = () => {

    return (
        <nav className="NavBar">
            <CustomLink to='/' className='siteTitle'>Home Page</CustomLink>
            <ul>
                <CustomLink to='/aboutMe'>About Me</CustomLink>
                <CustomLink to='/projects'>Projects</CustomLink>
                <CustomLink to='/skills'>Skills</CustomLink>
            </ul>

        </nav>
    );
}

export default NavBar;

function CustomLink({ to, children, className, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (

        <li className={isActive ? 'active' : ''}>
            <Link to={to} className={className}>{children}</Link>
        </li>
    )
}