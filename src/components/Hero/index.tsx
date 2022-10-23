import React from 'react'
import { Clips, SocialLinks } from '../utils'
import Image from 'next/image'

interface HeroProps {
  heroapi: {
    title: string;
    subtitle: string;
    btntext: string;
    img: any;
    videos: {
      imgsrc: any;
        clip: any;
    }[];
    sociallinks: {
        icon: any;
    }[];
  }
}
const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }: HeroProps) => {

  return (
    <div className='relative h-auto w-auto flex flex-col mb-80'>
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center shop-container'>
        <div className='grid items-center justify-items-center mt-28 md:mt-24'>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{ title }</h1>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'> { subtitle } </h1>
          <button type='button' className='button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'> { btntext } </button>
          <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
            {videos?.map((value, i) => (
              <Clips 
                key={i}
                imgsrc={value.imgsrc}
                clip={value.clip}
              />
            ))}
          </div>
          <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
            {sociallinks?.map((value: any, i) => (
              <SocialLinks 
                key={i}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
        <div className='flex items-center p-5'>
          <div className='w-auto h-[40vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'>
            <Image
              src={img} 
              alt='hero-img/img'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero