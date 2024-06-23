import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const productt =  all_product.find((e)=>e.id=== Number(productId));//RETURN THE PRODUCT THAT HAS A MATCHING ID AS THE PARAM productID

  return (
    <div>
      <Breadcrum product={productt}/>
    </div>
  )
}

export default Product
