import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {

  const productr =  props.product.find((e)=>e.id=== Number(props.productId));
  const {addToCart}= useContext(ShopContext);//using the shopcontext hook to import the addToCart function



  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        {/* PRODUCT IMAGES */}
        <div className="productdisplay-img-list">
          <img src={productr.image} alt="" />
          <img src={productr.image} alt="" />
          <img src={productr.image} alt="" />
          <img src={productr.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={productr.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        {/* PRODUCT DETAILS */}
        <h1>{productr.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(212)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₦{productr.old_price}</div>
          <div className="productdisplay-right-price-new">₦{productr.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis culpa excepturi, 
          dicta eligendi quae similique tempora deserunt illum consequuntur facilis. 
          Non incidunt nam est voluptatum? 
          Laudantium tempora culpa repellendus.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(productr.id)}}>ADD TO CART</button>
        <div className="productdisplay-right-category"><span>Category: </span>{productr.category}, {productr.name}</div>
        <div className="productdisplay-right-category"><span>Tags: </span>Modern, Latest</div>{/*PRODUCT DISCRIPTION AND TAGS SHOULD BE ADDED TO THE OBJECT */}
      </div>
    </div>
  )
}

export default ProductDisplay
