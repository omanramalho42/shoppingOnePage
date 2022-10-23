import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import { 
  Hero,
  Layout,
  Loading 
} from '../components'

const Home: NextPage = () => {
  const [load, setLoad] = useState<boolean | null>(true);
  useEffect(() => { setLoad(true) },[])
  useEffect(() => {
    setTimeout(() => { 
      setLoad((value) => !value)
    }, 1200)
  },[]);

  return (
    <Layout title='Home' description='Página inicial'>
      {load ? (
        <Loading />
      ) : (
        <>
          <h1>oi 🔥</h1>
          <Hero />
        </>
      )}
    </Layout>
  )
}

export default Home
