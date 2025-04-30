import React from 'react';
import CreateCategoryModal from './CreateCategoryModal';

const ManageCategories = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Manage Category</h1>
        <div>
          <CreateCategoryModal/>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;