import React from 'react'
import footerball from '../assets/images/footer/footer-ball.png'
import linkedin from '../assets/images/footer/linkedin.png'
import vimeo from '../assets/images/footer/vimeo.png'
import instagram from '../assets/images/footer/instagram.png'
import twitter from '../assets/images/footer/twitter.png'
import facebook from '../assets/images/footer/facebook.png'

import '../assets/styles/footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-grid">
          <div className="footer-container">
            <div className="footer-links">
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#">Inicio</a>
                </li>
                <li className="footer-list-item">
                  <a href="#">Acerca de nosotros</a>
                </li>
                <li className="footer-list-item">
                  <a href="#">Historia</a>
                </li>
                <li className="footer-list-item">
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul className="footer-list">
                <li className="social-item">
                  <img src={linkedin} alt="" />
                </li>
                <li className="social-item">
                  <img src={vimeo} alt="" />
                </li>
                <li className="social-item">
                  <img src={instagram} alt="" />
                </li>
                <li className="social-item">
                  <img src={twitter} alt="" />
                </li>
                <li className="social-item">
                  <img src={facebook} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-ball">
            <img src={footerball} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
