import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'
import Image from 'next/image'
import HeaderContainer from '../components/HeaderContainer'
import Arrows from '../lib/svg'
import ContentContainer from '../components/ContentContainer'
import { imageContent } from '../lib/data'

export default function Index() {
  const [showOneTitle, setShowOneTitle] = useState(false)
  const [showTwoTitle, setShowTwoTitle] = useState(false)
  const [showThreeTitle, setShowThreeTitle] = useState(false)
  const [showFourTitle, setShowFourTitle] = useState(false)
  const [showFiveTitle, setShowFiveTitle] = useState(false)

  const springOne = useSpring({
    config: { mass: 1, tension: 450, friction: 110 },
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })
  const springTwo = useSpring({
    config: { mass: 1, tension: 450, friction: 110 },
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 110,
  })
  const springThree = useSpring({
    config: { mass: 1, tension: 450, friction: 110 },
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 220,
  })
  const springFour = useSpring({
    config: { mass: 1, tension: 450, friction: 110 },
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 330,
  })

  return (
    <div className="main-container" data-scroll-section>
      <HeaderContainer />
      {/* BACKGROUND VIDEO */}
      {/* IMAGE SECTION */}
      <section
        data-scroll
        data-scroll-position="top"
        data-scroll-speed="2"
        className="landing-section"
      >
        <div className="landing-grid">
          <animated.div className="landing-text-first" style={springOne}>
            SPENCER
          </animated.div>
          <animated.div className="landing-text-second" style={springTwo}>
            GOFF
          </animated.div>
          <animated.div className="landing-text-third" style={springThree}>
            &#8220;CINEMA
          </animated.div>
          <animated.div className="landing-text-fourth" style={springFour}>
            -TOGRAPHER&#8221;
          </animated.div>
        </div>
      </section>
      <section
        data-scroll
        data-scroll-position="top"
        data-scroll-speed="1"
        data-scroll-delay="0.5"
        className="arrow-section"
      >
        <Arrows />
      </section>
      <section className="image-section">
        {imageContent.map((image, key) => {
          return <ContentContainer i={key} delay=".05" speed=".5" />
        })}
      </section>
      <section
        data-scroll
        data-scroll-position="bottom"
        data-scroll-speed="2"
        className="contact-section"
      >
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
