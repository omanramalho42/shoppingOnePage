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
    console.log({ popularsales, toprateslaes },'api'); 
  },[]);

  return (
    <Layout title='Home' description='Página inicial'>
      {load ? (
        <Loading />
      ) : (
        <>
          <div className='mb-80'>
            <Hero 
              heroapi={heroapi}
            />
          </div>
          <Sales data={popularsales} ifExists />
          <Sales data={toprateslaes} />
        </>
      )}
    </Layout>
  )
}

export default Home
