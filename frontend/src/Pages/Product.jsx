import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productID} = useParams();//destructure with exactly the same word used in the path(url) it is case sensitive
  // const productr =  all_product.find((e)=>e.id=== Number(productId));//RETURN THE PRODUCT THAT HAS A MATCHING ID AS THE PARAM productID
  // console.log(productr);

  return (
    <div>
      <Breadcrum product={all_product} productId={productID}/>
      <ProductDisplay product={all_product} productId={productID}/>
    </div>
  )
}

export default Product
