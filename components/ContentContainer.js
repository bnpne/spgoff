import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { imageContent, titles } from '../lib/data'

const classNames = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
]

export default function ContentContainer({ i, delay, speed }) {
  const [showTitle, setShowTitle] = useState(false)
  var source = imageContent[i].cover
  var slug = imageContent[i].slug

  var classes = calculateClass(i)

  return (
    <div
      data-scroll
      data-scroll-delay={`${delay}`}
      data-scroll-speed={`${speed}`}
      className="image-grid"
    >
      <p className="image-number">{i}</p>
      <Link href={`/work/${slug}`}>
        <a
          className={classes}
          onMouseEnter={() => setShowTitle(true)}
          onMouseLeave={() => setShowTitle(false)}
        >
          <Image
            src={`${source}`}
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPct29/PQAHOQK8WRZzEQAAAABJRU5ErkJggg=="
          />
          {showTitle && (
            <div className="image-overlay">
              <div>{`${titles[i]}`}</div>
            </div>
          )}
        </a>
      </Link>
    </div>
  )
}

function calculateClass(i) {
  var className = 'image-' + classNames[i]

  return className
}
