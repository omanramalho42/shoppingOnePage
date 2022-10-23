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
      <main className='flex min-h-screen flex-col items-center justify-center py-2'>
        { children }
      </main>
    </>
  )
}

export default Layout