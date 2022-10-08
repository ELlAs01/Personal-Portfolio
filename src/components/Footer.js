import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import  Facebook  from '@material-ui/icons/Facebook'
import  LinkedIn  from '@material-ui/icons/LinkedIn'
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <Facebook />
            <LinkedIn />

        </div>
        <p> &copy; 2022 eleasbouras.com</p>
    </div>
  )
}
