import React from 'react'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const FooterComp = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()
  return (
    <footer id='footer'>
    <div>
    <p> &copy; All Rights Reserved </p>
    <p>{date}/{month} - {year}</p>
    <h4>Louie Stokk</h4>
    </div>
    <div>
      <XIcon />
      <FacebookIcon style={{margin:'0 0.35rem'}}/>
      <LinkedInIcon  style={{margin:'0 0.35rem'}}/>
      <YouTubeIcon />
    </div>
    </footer>
  )
}

export default FooterComp

// background: #1976d2;
// height: 200px;
// position: relative;