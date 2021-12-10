import React from 'react';
import { useRouter } from 'next/router';

import data from './../../utils/data';

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;

  const product = data.products.find((product) => {
    return product.slug === slug;
  });

  return !product ? (
    <div>Product Not Found</div>
  ) : (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
