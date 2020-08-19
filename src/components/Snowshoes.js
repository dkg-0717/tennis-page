import React, { useState } from 'react'
import '../assets/styles/snowshoes.css'
import snowshoe from '../assets/images/snowshoes/snowshoe.png'

export const Snowshoes = () => {

  let [index, setIndex] = useState(0)

  let cardsContain = [
    { title: 'NUESTRAS', subtitle: 'RAQUETAS', description: '1.Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.' },
    { title: 'NUESTRAS', subtitle: 'RAQUETAS', description: '2.Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.' },
    { title: 'NUESTRAS', subtitle: 'RAQUETAS', description: '3.Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.' },
    { title: 'NUESTRAS', subtitle: 'RAQUETAS', description: '4.Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.' },
  ]

  const next = () => {
    index < cardsContain.length - 1 && setIndex(index + 1)
  }

  const back = () => {
    index > 0 && setIndex(index - 1)
  }

  return (
    <section className="snowshoes">
      <div className="wrapper">
        <div className="snowshoes-grid">
          <div className="balls-carousel">
            <div className="balls-container">
              <div className="title">
                {cardsContain.map((data, idx) => {
                  return (
                    idx == index &&
                    <div className={idx == index ? 'active' : null}>
                      <p className="title-first text-white">{data.title}</p>
                      <p className="subtitle text-white">{data.subtitle}</p>
                      <p className="title-description text-white">{data.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="description"></div>
              <div className="points">
                {cardsContain.map((elem, idx) => {
                  return (
                    <div className={`point ${idx == index ? 'active' : null}`}></div>
                  )
                })}
              </div>
              <div className="controls">
                <div className="control-left" onClick={back}>
                  <div className="play play-left"></div>
                </div>
                <div className="control-right" onClick={next}>
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
