import '../styles/globals.css'
import { useRouter } from 'next/router'
import MetaTags from '../components/MetaTags'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null)
  const { asPath } = useRouter() // With next/router

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.09708,
        firefoxMultiplier: 100,
        smartphone: {
          smooth: true,
        },
        // ... all available Locomotive Scroll instance options
      }}
      watch={[]}
      location={asPath}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      // onUpdate={() => console.log('Updated, but not on location change!')}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <MetaTags
          title="SPENCER GOFF | CINEMATOGRAPHER"
          desc="CINEMATOGRAPHER"
        />
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default MyApp
