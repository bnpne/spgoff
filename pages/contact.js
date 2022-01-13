import React from 'react'
import HeaderContainer from '../components/HeaderContainer'
import Link from 'next/link'

export default function Contact() {
  return (
    <div data-scroll-section className="main-container">
      <HeaderContainer />
      <div className="contact-section-page">
        <section className="landing-grid">
          <div className="contact-info-title">CONTACT</div>
          <div className="contact-info-first">
            <div>EMAIL: SPENCER@SPGOFF.COM</div>
            <div>PHONE: 208-313-7543</div>
            <div>SALT LAKE CITY, UTAH, USA</div>
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
        </section>
      </div>
    </div>
  )
}
