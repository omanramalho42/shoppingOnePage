import React from 'react'

import Head from 'next/head'

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>justay shop - { title }</title>
        <meta name="description" content={description} />
      </Head>
      <main className='flex flex-col gap-16 relative'>
        { children }
      </main>
    </>
  )
}

export default Layout