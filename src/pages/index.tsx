import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import { 
  Hero,
  Layout,
  Loading 
} from '../components'

const Home: NextPage = () => {
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => { setLoad(false) },[])
  // useEffect(() => {
  //   setTimeout(() => { 
  //     setLoad((value) => !value)
  //   }, 1200)
  // },[]);

  return (
    <Layout title='Home' description='Página inicial'>
      {load ? (
        <Loading />
      ) : (
        <>
          <Hero 
            btntext='Explore Product' 
            subtitle='Adapt 2.0 Sneackers' 
            title='Play With Eletric Nike' 
            img='https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Pic.png' 
          />
        </>
      )}
    </Layout>
  )
}

export default Home
