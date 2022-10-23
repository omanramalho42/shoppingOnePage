import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartState, setCloseCart } from '../../app/CartSlice';

import { 
  CartItem, 
  CartCount, 
  CartEmpty 
} from './cart/index'

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems: any = useSelector(selectCartItems);

  console.log({ cartItems });

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`}>
      <div className='blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0'>
        <CartCount totalQTY={''} onCartToggle={onCartToggle} onClearCartItems={() => {}} />
        {/* <CartItem />*/}
        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={() => {}} />
        ) : (
          <div>
            {cartItems?.map((item: any, i: number) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-semibold uppercase">SubTotal</h1>
          <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${''}</h1>
        </div>
        <div className="grid items-center gap-2">
          <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
          <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
        </div>
      </div>

    </div>
  )
}

export default Cart