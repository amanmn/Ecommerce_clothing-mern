import Breadcrum from '@/Breadcrums/Breadcrum';
import { ShopContext } from '@/Context/ShopContext'
import ProductDisplay from '@/ProductDisplay/ProductDisplay';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {

  const { all_product } = useContext(ShopContext)
  // useEffect(() => {
  //   console.log(all_product);
  // })

  const { productId } = useParams();
  // console.log("id:", productId);
  
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product);

  return (
    <div className=''>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
