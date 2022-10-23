import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import { 
  FlexContent,
  Footer,
  Hero,
  Layout,
  Loading, 
  Navbar, 
  Sales,
  Stories
} from '../components'

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../data/data';

const Home: NextPage = () => {
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => { 
    setLoad(false)
    console.log({ popularsales, toprateslaes },'api'); 
  },[]);

  return (
    <>
      <Navbar />
      <Layout title='Home' description='Página inicial'>
        {load ? (
          <Loading />
        ) : (
          <>
            <Hero 
              heroapi={heroapi}
              />
            <FlexContent data={highlight} ifExists />
            <Sales data={popularsales} ifExists />
            <Sales data={toprateslaes} />
            <FlexContent data={sneaker} />
            <Stories story={story} />
            <Footer data={footerAPI} />
          </>
        )}
      </Layout>
    </>
  )
}

export default Home
