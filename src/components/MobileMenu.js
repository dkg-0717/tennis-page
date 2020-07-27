import React, { useEffect } from 'react'
import gsap from 'gsap'
import '../assets/styles/mobile-menu.css'

export const MobileMenu = ({ isActive, setActive }) => {

  if (!isActive) return null

  useEffect(() => {
    let li = document.querySelectorAll('.link-mobile-item')
    gsap.from(li, {
      duration: 1,
      scale: 0,
      ease: "back",
      stagger: {
        amount: 0.5
      }
    })
  })

  const closeMenu = () => {
    setActive(0)
  }

  return (
    <div className="mobile-menu">
      <div className="close-button" onClick={closeMenu}>X</div>
      <div className="links-mobile">
        <ul className="links-mobile-container">
          <li className="link-mobile-item">
            <a href="#">Inicio</a>
          </li>
          <li className="link-mobile-item">
            <a href="#">Acerca de nosotros</a>
          </li>
          <li className="link-mobile-item">
            <a href="#">Historia</a>
          </li>
          <li className="link-mobile-item">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
