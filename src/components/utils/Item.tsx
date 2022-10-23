import React, { useEffect } from 'react'

import Image from 'next/image'

import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice';

interface ItemProps {
  ifExists: boolean;
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
const Item = ({ ifExists, item: { id, btn, color, shadow, img, price, rating, title, text } }: ItemProps) => {
  const disptach = useDispatch()
  
  const onAddToCart = () => {
    const item =  { id, title, text, img, color, shadow , price };
    disptach(setAddItemToCart(item));
  }

  const onCartToggle = () => {
    disptach(setOpenCart({
        cartState: true
    }))
  }
  
  return (
    <>
    {/* from-sky-600 to-indigo-600 */}
    {/* from-orange-500 to-amber-500 */}
    {/* from-red-500 to-rose-500  */}
    {/* from-green-500 to-emerald-500 */}
    {/* from-gray-900 to-yellow-500 */}
    {/* from-yellow-500 to-yellow-500 */}
    {/* from-blue-500 to-cyan-500  */}
    {/* from-[#936550] to-orange-900 */}
    {/* from-indigo-700 to-indigo-700 */}
    {/* bg-gradient-to-b from-green-600 */}
    {/*  bg-gradient-to-b from-slate-900 */}
      {/* from-blue-900 to-blue-500 */}
      {/* from-blue-600 to-blue-500 */}
      {/* from-red-500 to-rose-500  */}
      {/* from-violet-500 to-indigo-500  */}
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={()=> {onAddToCart(); onCartToggle()}}
            >
              { btn }
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <div
            className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
            }`}
          >
            <Image
              src={img}
              alt={`img/item-img/${id}`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Item