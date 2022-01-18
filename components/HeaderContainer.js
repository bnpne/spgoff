import React from 'react'
import Link from 'next/link'

export default function HeaderContainer() {
  return (
    <header
      className="header-container"
      data-scroll
      data-scroll-sticky
      data-scroll-target=".main-container"
    >
      <div className="header-section">
        <Link href="/">
          <a className="link-object">S—G</a>
        </Link>
        <Link href="/">
          <a className="link-object">WORK</a>
        </Link>

        <Link href="/contact">
          <a className="link-object">CONTACT</a>
        </Link>
      </div>
    </header>
  )
}
