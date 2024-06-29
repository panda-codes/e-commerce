import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productID} = useParams();//destructure with exactly the same word used in the path(url) it is case sensitive

  return (
    <div>
      <Breadcrum product={all_product} productId={productID}/>
      <ProductDisplay product={all_product} productId={productID}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
