import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {data_product.map((e,i)=>{ 
            return <Items key ={i} id={e.id} name={e.name} img={e.image} new_price={e.new_price}  old_price={e.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
