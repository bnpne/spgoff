import React, { useState } from 'react'
import HeaderContainer from '../../components/HeaderContainer'
import { imageContent } from '../../lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Jazz() {
  const pid = imageContent[1]

  const images = pid.images
  const [play, setPlay] = useState(false)

  return (
    <div className="main-container" data-scroll-section>
      <HeaderContainer />
      <section className="credits-container">
        <div className="credits-video-container">
          {play ? (
            <iframe
              className="credits-video-iframe"
              src={`https://player.vimeo.com/video/${pid.video}?loop=true&autoplay=true&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&transparent=false`}
              frameBorder="0"
            ></iframe>
          ) : (
            <Image
              onClick={() => setPlay(true)}
              className="credits-video-overlay"
              src={pid.cover}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
            />
          )}
        </div>
        <div className="credits-title">UTAH JAZZ | EMBRACE THE NOISE</div>
        <div className="credits-grid">
          <div className="credits-info-title">CREDITS</div>

          <div className="credits-info-first">
            <div>CREATIVE DIRECTOR CHRIS GEORGE</div>
            <div>AGENCY PRODUCER JOSH JOON LEE</div>
            <div>PRODUCER CHRISTIAN DARAIS MERIK RICHARDSON</div>
            <div>DIRECTOR BENJI ALLRED</div>
            <div>DP SPENCER GOFF</div>
            <div>STEADICAM JOHN WILLIAMS</div>
            <div>AC MITCH GARCIA</div>
            <div>GAFFER JARED JAYNES</div>
            <div>KEY GRIP JR WILLIAMS</div>
            <div>GRIP MAX WENHAM</div>
            <div>GRIP KATO WONG</div>
            <div>PA AMMON PASKETT</div>
            <div>HMUA KATIE ADAIR</div>
            <div>PRODUCTION DESIGNER CARISSA KLITGAARD</div>
            <div>WARDROBE TY DAVIS</div>
            <div>VEHICLE COORDINATOR ROB VINTAGE</div>
            <div>JAZZ APPAREL THRIFTHOOD</div>
            <div>EDITORS ANDY MATTHEWS, AARON THARPE</div>
            <div>MUSIC AND SOUND BRENDEN BYTHEWAY, CHRISTIAN DARAIS</div>
            <div>COLOR BENJI ALLRED</div>
            <div>ADDITIONAL TITLING AUSTIN BERENYI</div>
            <div>SPOKESMAN DEMETRIUS DANIELS</div>
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
