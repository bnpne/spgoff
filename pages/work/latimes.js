import React, { useState } from 'react'
import HeaderContainer from '../../components/HeaderContainer'
import { imageContent } from '../../lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function LaTimes() {
  const pid = imageContent[5]
  const images = pid.images
  const [play, setPlay] = useState(false)
  // console.log(images)
  return (
    <div className="main-container" data-scroll-section>
      <HeaderContainer />
      <section className="credits-container">
        <div className="credits-video-container">
          {play ? (
            <iframe
              className="credits-video-iframe"
              src="https://player.vimeo.com/video/471155692?loop=true&autoplay=true&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&transparent=false"
              frameBorder="0"
              allowFullScreen
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
        <div className="credits-title">LA TIMES</div>
        <div className="credits-grid">
          <div className="credits-info-title">CREDITS</div>
          <div className="credits-info-first">
            <div>DIRECTOR BENJI ALLRED</div>
            <div>DIRECTOR OF PHOTOGRAPHY SPENCER GOFF</div>
            <div>1ST AC TAYLOR GALBRAITH</div>
            <div>
              PRODUCED BY MERIK RICHARDSON, CHRISTINA DARAIS, CONNOR DEAN
            </div>
            <div>ART DIRECTOR CAMERON TRIBE</div>
            <div>GAFFER MERIK RICHARDSON</div>
            <div>GRIP JACK LOTT</div>
            <div>GRIP BRENT REYNOLDS</div>
            <div>HAIR & MUA MIKAELA KESTER</div>
          </div>
        </div>
        <div className="credits-image-grid">
          {images.map((i, index) => {
            if (
              index === 2 ||
              index === 5 ||
              index === 8 ||
              index === images.length - 1
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
