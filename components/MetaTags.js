import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function MetaTags({ title, desc }) {
  const router = useRouter()
  const image = '/sp.png'

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta content={desc} name="description" />
      {/* TODO: Fix import this! */}
      <meta
        property="og:url"
        content={`https://www.spgoff.com/${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      {/* TODO: NAME */}
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
