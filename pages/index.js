import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'
import Image from 'next/image'
import HeaderContainer from '../components/HeaderContainer'
import Arrows from '../lib/svg'

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
      {/* <div className="video-section">
        <video loop muted autoPlay className="video-container">
          <source
            src="https://videos.ctfassets.net/w85pbwcrhwxy/3WutUmPj1BWEKGOZjosDNb/484ea0b8584a679325ddcdb5f0de9da7/jeep-flag.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}
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
        <div
          data-scroll
          data-scroll-delay=".05"
          data-scroll-speed=".5"
          className="image-grid"
        >
          <p className="image-number">01</p>
          <Link href="/work/jeep">
            <a
              className="image-first"
              onMouseEnter={() => setShowOneTitle(true)}
              onMouseLeave={() => setShowOneTitle(false)}
            >
              <Image
                src="https://images.ctfassets.net/w85pbwcrhwxy/54wq3S7vtDfAVO3wjkgKHY/93fc7e2bc98909776c45c89518c3c9b8/Jeep_Donut_Wide.png"
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
              />
              {showOneTitle && (
                <div className="image-overlay">
                  <div>JEEP RUBICON</div>
                </div>
              )}
            </a>
          </Link>
        </div>
        <div
          data-scroll
          data-scroll-delay=".05"
          data-scroll-speed=".5"
          className="image-grid"
        >
          <p className="image-number">02</p>
          <Link href="/work/twisted">
            <a
              className="image-second"
              onMouseEnter={() => setShowTwoTitle(true)}
              onMouseLeave={() => setShowTwoTitle(false)}
            >
              <Image
                src="https://images.ctfassets.net/w85pbwcrhwxy/5PVEIN9YaABY0aGb20d5ia/a41889dc0faa4148a0743f2c5a891bd2/twisted.jpg"
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
              />
              {showTwoTitle && (
                <div className="image-overlay">
                  <div>TWISTED</div>
                </div>
              )}
            </a>
          </Link>
        </div>
        <div
          data-scroll
          data-scroll-delay=".05"
          data-scroll-speed=".5"
          className="image-grid"
        >
          <p className="image-number">03</p>
          <Link href="/work/zero">
            <a
              className="image-third"
              onMouseEnter={() => setShowThreeTitle(true)}
              onMouseLeave={() => setShowThreeTitle(false)}
            >
              <Image
                src="https://images.ctfassets.net/w85pbwcrhwxy/JLgWYXyzBRDWroGFhKsu9/26ed6720c19658379d4269d88843b75f/zero.jpg"
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
              />
              {showThreeTitle && (
                <div className="image-overlay">
                  <div>ZERO MOTORCYCLES</div>
                </div>
              )}
            </a>
          </Link>
        </div>
        <div
          data-scroll
          data-scroll-delay=".05"
          data-scroll-speed=".5"
          className="image-grid"
        >
          <p className="image-number">04</p>
          <Link href="/work/latimes">
            <a
              className="image-fourth"
              onMouseEnter={() => setShowFourTitle(true)}
              onMouseLeave={() => setShowFourTitle(false)}
            >
              <Image
                src="https://images.ctfassets.net/w85pbwcrhwxy/4LVV4MVXMiV43C2BxykmwO/1c50e2da0bf1c6a7d13c137957cd7c73/latimes.jpg"
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
              />
              {showFourTitle && (
                <div className="image-overlay">
                  <div>LA TIMES | THE BORDER</div>
                </div>
              )}
            </a>
          </Link>
        </div>
        <div
          data-scroll
          data-scroll-delay=".05"
          data-scroll-speed=".5"
          className="image-grid"
        >
          <p className="image-number">05</p>
          <Link href="/work/roseburg">
            <a
              className="image-fifth"
              onMouseEnter={() => setShowFiveTitle(true)}
              onMouseLeave={() => setShowFiveTitle(false)}
            >
              <Image
                src="https://images.ctfassets.net/w85pbwcrhwxy/2nxwXGpg7KQ5vvr6465EE2/e7b7138cffcb440d4049b8b57bc5af06/roseburg.jpg"
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
              />
              {showFiveTitle && (
                <div className="image-overlay">
                  <div>BE GOOD</div>
                </div>
              )}
            </a>
          </Link>
        </div>
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
