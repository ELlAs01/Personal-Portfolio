import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My Name is Eleas </h2>
            <div className='prompt'>
                <p> A software developer with a passion for learning and creating.</p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
                </div>
        </div>
        <div className='skills'>
            <h1> Skills </h1>
            <ol className='list'>
                <li className='item'>
                    <h2> Front-End </h2>
                    <span>
                        ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS
                    </span>
                </li>
                <li className='item'>
                    <h2> Back-End </h2>
                    <span>
                        NodeJS, MongoDB
                    </span>
                </li>
                <li className='item'>
                    <h2> Languages </h2>
                    <span>
                        JavaScript, Java, Python, C, C++, TypeScript
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}
