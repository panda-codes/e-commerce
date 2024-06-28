import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrum = (props) => {

    const productr =  props.product.find((e)=>e.id=== Number(props.productId));

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {productr.category} <img src={arrow_icon} alt="" /> {productr.name}
    </div>
  )
}

export default Breadcrum
