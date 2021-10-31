import React from 'react'
import '../css/ProjectCards.css'
import { Link } from 'react-router-dom'

export const ProjectCards = () => {


    return (
        <>
        <div className='background'>
        <h1 className='header'>My Projects</h1>
        <div className='cards'>
        <a href='https://venerable-discord-clone.web.app/'><div className='card1'></div></a>
        <div className='card2'></div>
        <a href='https://clone-ad283.web.app'><div className='card3'></div></a>
        </div>
        <div className='read__btn'><Link to='/projects'><button className='btn'>Read More</button></Link></div>
        </div>
        </>
    )
}