import React from 'react'
import { 
  Item, 
  Title 
} from '../utils'

interface SalesProps {
  ifExists?: boolean;
  data: { 
    title: string; 
    items: any[] 
  };
}

const Sales = ( { ifExists = false, data: { title, items } }: SalesProps) => {
  return (
    <div className='shop-container'>
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items.map((item, i) => (
          <Item item={item} key={i} ifExists={ifExists} /> 
        ))}
      </div>
    </div>
  )
}

export default Sales