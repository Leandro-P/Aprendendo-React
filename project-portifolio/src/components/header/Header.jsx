import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/people_1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Leandro Pereira de Jesus</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={Me} alt="Me" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>

    </div>
    </header>
  )
}

export default Header