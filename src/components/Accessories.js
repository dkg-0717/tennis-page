import React from 'react'
import '../assets/styles/accessories.css'

export const Accessories = () => {
  return (
    <section className="accessories">
      <div className="wrapper">
        <div className="accessories-grid">
          <div className="tennis">
            <p className="tennis-text">TENNIS</p>
          </div>
          <div className="description">
            <div className="snowshoe-container">
              <p className="accessories-description">Raquetas.Accesorios.</p>
              <p className="accessories-description">Pelotas.</p>
            </div>
            <div className="accessories-container">
              <p className="accessories-info">
                Conoce nuestros accesorios y aprende a jugar
            </p>
              <p className="accessories-info">
                Tennis cómo un profesional
            </p>
            </div>
          </div>
          <div className="history">
            <button className="circle-button border-black">Historia
              <div className="small-arrow">
                <div className="line bg-black"></div>
                <div className="black-tip right">
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
