import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import { 
  Hero,
  Layout,
  Loading, 
  Sales
} from '../components'

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../data/data';

const Home: NextPage = () => {
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => { 
    setLoad(false)
    console.log({ popularsales },'api'); 
  },[])
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
          <Sales data={popularsales} />
          <Sales data={toprateslaes} />
        </>
      )}
    </Layout>
  )
}

export default Home
