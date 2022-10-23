import React from 'react'
import { 
  Item, 
  Title 
} from '../utils'

interface SalesProps {
  data: { 
    title: string; 
    items: any[] 
  };
}

const Sales = ( { data: { title, items } }: SalesProps) => {
  console.log({ items });
  return (
    <div>
      <Title title={title} />
      <div>
        {items.map((value, i) => (
          <div key={i}>
            <Item item={value} /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sales