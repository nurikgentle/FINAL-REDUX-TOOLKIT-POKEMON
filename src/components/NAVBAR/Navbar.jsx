import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
 
const Navbar = () => {



  return (
    <>
    <div className='red'>
        <Link onClick={click => {
          document.getElementById("1").style.fontWeight = '600'
          document.getElementById("2").style.fontWeight = '400'
          document.getElementById("3").style.fontWeight = '400'

        }} id='1' to='/'>Все Покемоны</Link>
        <Link onClick={click => {
          document.getElementById("2").style.fontWeight = '600'
          document.getElementById("1").style.fontWeight = '400'
          document.getElementById("3").style.fontWeight = '400'
        }} id='2' to="/help">Помощь</Link>
         <Link onClick={click => {
          document.getElementById("3").style.fontWeight = '600'
          document.getElementById("2").style.fontWeight = '400'
          document.getElementById("1").style.fontWeight = '400'
         }} id='3' to="/contacts">Контакты</Link>
    </div>

    <div className='black'></div>
    </>
  )
}

export default Navbar