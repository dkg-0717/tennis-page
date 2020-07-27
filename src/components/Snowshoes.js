import React from 'react'
import '../assets/styles/snowshoes.css'
import snowshoe from '../assets/images/snowshoes/snowshoe.png'

export const Snowshoes = () => {

  return (
    <section className="snowshoes">
      <div className="wrapper">
        <div className="snowshoes-grid">
          <div className="balls-carousel">
            <div className="balls-container">
              <div className="title">
                <p className="title-first text-white">NUESTRAS</p>
                <p className="subtitle text-white">RAQUETAS</p>
                <p className="title-description text-white">Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
              </div>
              <div className="description"></div>
              <div className="points">
                <div className="point active"></div>
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
              </div>
              <div className="controls">
                <div className="control-left">
                  <div className="play play-left"></div>
                </div>
                <div className="control-right">
                  <div className="play"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="snowshoes-carousel">
            <div className="snowshoe-section-container">
              {new Array(5).fill('').map((elem, index) => {
                return (
                  <div className="snowshoe-card">
                    <div className="card-number">{index + 1}</div>
                    <img className="snowshow-image" src={snowshoe} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
