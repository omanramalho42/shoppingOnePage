import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface ItemProps {
  item: {
    btn: string;
    color: string;
    id: string;
    img: {
      src: string;
      height: number, width: number, 
      blurDataURL: string, 
      blurWidth: number
    };
    price: string;
    rating: string;
    shadow: string;
    text: string;
    title: string;
  }
}

const Item = ({ item: { btn, color, id, img, price, rating, title, text} }: ItemProps) => {
  return (
    <div className='d-flex flex-col'>
      <h5> { title } </h5>
      <p> { text } </p>
      <div className='d-flex'>
        <span className='bg-primary'>
          ${ price }
        </span>
        <span>
          <StarIcon fontSize={0} />
          <p> { rating } </p>
        </span>
      </div>
      <div>
        <span>
          <ShoppingBagIcon fontSize={20}/>
        </span>
        <button 
          type='button' 
          className='btn btn-primary'
        >
          { btn }
        </button>
      </div>
    </div>
  )
}

export default Item