import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {


    return (
        <div className='Container'>
            <div className='Title'>
                <h2>Welcome to my Website!</h2>
            </div>
            <div className='page__links'>
                <Link to='/projects' className='page__links'><span className='link__Projects'>Projects</span></Link>
                <Link to='/about_me' className='page__links'><span className='link__About'>About Me</span></Link>
                <Link to='/contact_me' className='page__links'><span className='link__Contact'>Contact Me</span></Link>
            </div>
        </div>
    )
}