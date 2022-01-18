import React, { useState } from 'react'
import HeaderContainer from '../../components/HeaderContainer'
import { imageContent } from '../../lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Jeep() {
  const images = imageContent[0]
  const [play, setPlay] = useState(false)

  return (
    <div className="main-container" data-scroll-section>
      <HeaderContainer />
      <section className="credits-container">
        <div className="credits-video-container">
          {play ? (
            <iframe
              className="credits-video-iframe"
              src="https://player.vimeo.com/video/612911410?loop=true&autoplay=true&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&transparent=false"
              frameBorder="0"
            ></iframe>
          ) : (
            <Image
              onClick={() => setPlay(true)}
              className="credits-video-overlay"
              src="https://images.ctfassets.net/w85pbwcrhwxy/54wq3S7vtDfAVO3wjkgKHY/93fc7e2bc98909776c45c89518c3c9b8/Jeep_Donut_Wide.png"
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
            />
          )}
        </div>
        <div className="credits-title">JEEP RUBICON</div>
        <div className="credits-grid">
          <div className="credits-info-title">CREDITS</div>
          <div className="credits-info-first">
            <div>AGENCY - HIGHDIVE</div>
            <div>DIRECTOR BENJI ALLRED</div>
            <div>DIRECTOR OF PHOTOGRAPHY SPENCER GOFF</div>
            <div>PRODUCED BY CHRISTIAN DARAIS, MERIK RICHARDSON</div>
            <div>PRODUCTION COMPANY THE FOLD</div>
            <div>CAMERA CAR TEAM KRAKEN CINEMA</div>
            <div>STUNT DRIVER MATT POWERS</div>
            <div>1ST AC MIKKEL RICHARDSON</div>
            <div>2ND AC JARED S</div>
            <div>GAFFER TRENTON DAVIS</div>
            <div>GRIP KATO WONG</div>
            <div>GRIP ELIAS JESSOP</div>
            <div>SPECIAL FX RYAN ROUNDY</div>
            <div>LOCATIONS MOAB FILM SERVICE</div>
            <div>MEDIC VAL WILDING</div>
            <div>EDIT BY TIMBER PICTURE CO.</div>
            <div>MUSIC, SOUND DESIGN, MIX BY CHRISTIAN DARAIS</div>
            <div>COLOR BY BENJI ALLRED</div>
            <div>VFX BY ROCKIN’ VFX</div>
          </div>
        </div>
        <div className="credits-image-grid">
          {images.map((i, index) => {
            if (
              index === 2 ||
              index === 5 ||
              index === 8 ||
              (index % 2 === 1 && index === images.length - 1)
            )
              return (
                <div key={index} className="credits-images-full-span">
                  <Image
                    src={i}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
                  />
                </div>
              )
            else
              return (
                <div key={index} className="credits-images-normal">
                  <Image
                    src={i}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
                  />
                </div>
              )
          })}
        </div>
      </section>
      <section className="contact-section">
        <div className="landing-grid">
          <div className="contact-info-title">CONTACT</div>
          <div className="contact-info-first">
            <div>EMAIL: SPENCER@SPGOFF.COM</div>
            <div>PHONE: 208-313-7543</div>
          </div>
          <div className="contact-info-second">
            <div>
              <Link href="https://www.instagram.com/sp.goff/" target="_blank">
                <a className="link-object">INSTAGRAM: @SPGOFF</a>
              </Link>
            </div>
            <div>
              <Link href="https://vimeo.com/spgoff" target="_blank">
                <a className="link-object">VIMEO: SPGOFF</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing-grid" style={{ paddingTop: '2rem' }}>
          <div className="contact-info-title">2022</div>
          <div className="contact-info-first">
            <div>DESIGNED & DEVELOPED</div>
            <div>
              <Link href="https://bnpne.co">
                <a className="link-object">BY BEN PAINE</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing-grid">
          <div className="contact-large-first">AVAILABLE</div>
          <div className="contact-large-second">FOR HIRE</div>
        </div>
      </section>
    </div>
  )
}
