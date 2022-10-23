import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import { 
  Hero,
  Layout,
  Loading 
} from '../components'

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../data/data';

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
            heroapi={heroapi}
          />
        </>
      )}
    </Layout>
  )
}

export default Home
