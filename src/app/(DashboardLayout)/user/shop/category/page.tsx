import ManageCategories from '@/components/modules/shop/category';
import { getAllCategories } from '@/services/Category';
import React from 'react';

const ProductCategory = async() => {
  const { data, meta } = await getAllCategories();
  return (
    <div>
    <ManageCategories  categories={data}/>
    </div>
  );
};

export default ProductCategory