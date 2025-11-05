import Breadcrum from '@/Breadcrums/Breadcrum';
import DescriptionBox from '@/Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '@/Components/RelatedProducts/RelatedProducts';
import { ShopContext } from '@/Context/ShopContext'
import ProductDisplay from '@/ProductDisplay/ProductDisplay';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {

  const { all_product } = useContext(ShopContext)

  const { productId } = useParams();
  // console.log("id:", productId);

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className=''>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
