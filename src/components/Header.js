import React, { useEffect, useState } from 'react'
import '../assets/styles/header.css'
import ball from '../assets/images/header/ball.png'
import { MobileMenu } from './MobileMenu'

export const Header = () => {

  let [links, setLinks] = useState([])
  let [isActive, setActive] = useState(0)

  useEffect(() => {
    let items = document.querySelectorAll('.link-item a')
    setStyle(items[0])
    setLinks(items)
  }, [])

  const setStyle = (elem) => {
    elem.style.color = "#fff"
    elem.classList.add('link-item-active')
  }

  const removeActive = () => {
    links.forEach(el => el.classList.remove('link-item-active'))
  }

  const handleClick = (evt) => {
    removeActive()
    setStyle(evt.target)
  }

  const openMenu = () => {
    setActive(1)
  }

  return (
    <>
      <MobileMenu isActive={isActive} setActive={setActive} />
      <header className="header">
        <div className="wrapper">
          <div className="header-grid">
            <div className="ball-place">
              <div className="menu-mobile" onClick={openMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="ball">
                <div className="language-mobile">
                  <span className="language-text-mobile text-bold">ES</span>
                  <span className="language-text-mobile">EN</span>
                </div>
                <img src={ball} alt="" />
              </div>
            </div>
            <div className="navbar-place">
              <div className="navbar-container">
                <div className="links">
                  <nav className="navbar">
                    <ul className="link-list">
                      <li className="link-item">
                        <a href="#" onClick={handleClick}>Inicio</a>
                      </li>
                      <li className="link-item">
                        <a href="#" onClick={handleClick}>Acerca de nosotros</a>
                      </li>
                      <li className="link-item">
                        <a href="#" onClick={handleClick}>Historia</a>
                      </li>
                      <li className="link-item">
                        <a href="#" onClick={handleClick}>Contacto</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="language">
                  <span className="language-text text-bold">ES</span>
                  <span className="language-text">EN</span>
                </div>
              </div>
              <div className="info">
                <div className="info-container">
                  <p className="info-text">
                    Las mejores raquetas para jugar <span className="tennis-text">Tennis</span>
                  </p>
                  <button className="circle-button border-white text-white">
                    ACERCA DE NOSOTROS
                  <div className="small-arrow">
                      <div className="line bg-white"></div>
                      <div className="white-tip right">
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
