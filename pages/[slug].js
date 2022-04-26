import React, { useState, useEffect } from 'react'
import HeaderContainer from '../components/HeaderContainer'
import { imageContent, titles } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { slug } = router.query
  // const dataId = imageContent.indexOf({ slug: `${pid}` })

  console.log(slug)

  const images = imageContent[dataId].images
  const title = titles[dataId]
  const videoId = imagesContent[dataId].video
  const [play, setPlay] = useState(false)

  return (
    <div className="main-container" data-scroll-section>
      <HeaderContainer />
      <section className="credits-container">
        {/* CREATE A LOADER */}
        <div className="credits-video-container">
          {play ? (
            <iframe
              className="credits-video-iframe"
              src={`https://player.vimeo.com/video/${videoId}?loop=true&autoplay=true&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              onClick={() => setPlay(true)}
              className="credits-video-overlay"
              src="https://images.ctfassets.net/w85pbwcrhwxy/JLgWYXyzBRDWroGFhKsu9/26ed6720c19658379d4269d88843b75f/zero.jpg"
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
            />
          )}
        </div>
        <div className="credits-title">{title}</div>
        <div className="credits-grid">
          <div className="credits-info-title">CREDITS</div>
          <div className="credits-info-first">
            <div>DIRECTOR CAMERON GOOLD</div>
            <div>DIRECTOR OF PHOTOGRAPHY SPENCER GOFF</div>
            <div>PRODUCTION COMPANY H.A.G.S.</div>
            <div>PRODUCER ETHEN ROBERTS, PATRICK ALLRED</div>
            <div>
              STUNT RIDERS KORTEL AUTREY, ETHEN ROBERTS, MEREDITH DEVINE
            </div>
            <div>STUND RIDERS JOSH ROBERTS, TYSON BLACK, NICK DEAN</div>
            <div>PHOTOGRAPHERS AARON BRIMHALL, MIKE BIGGINS</div>
            <div>1ST AC BRENT REYNOLDS</div>
            <div>GIMBAL TECH BRENT REYNOLDS</div>
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
