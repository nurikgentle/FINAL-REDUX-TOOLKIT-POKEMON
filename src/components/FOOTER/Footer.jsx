import React from 'react'
import './footer.css'
import Instagram from './../../assets/instagram.svg'
import Facebook from './../../assets/Facebook.svg'
import Telegram from './../../assets/Telegram.svg'
import YouTube from './../../assets/YouTube.svg'

const Footer = () => {


  return (
    <div className='footer'>
      <h2>Подпишитесь на нас!</h2>
      <a href='https://youtu.be/y90yaLFoYoA'><img className='socials' src={Instagram} alt='instagram'/></a>
      <a href='https://youtu.be/km728FNBInA'><img className='socials' src={Facebook} alt='facebook'/></a>
      <a href='https://youtu.be/Hxab_Sr132o'><img className='socials' src={Telegram} alt='telegram'/></a>
      <a href='https://youtu.be/XpKSIFGUQ9U'><img className='socials' src={YouTube} alt='YouTube'/></a>
    </div>
  )
}

export default Footer