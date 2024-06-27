import React from 'react'
import './Productdisplay.css'

const ProductDisplay = (props) => {

  const productr =  props.product.find((e)=>e.id=== Number(props.productId));


  return (
    <div className='productdisplay'>
      <img src={productr.image} alt="" />
    </div>
  )
}

export default ProductDisplay
