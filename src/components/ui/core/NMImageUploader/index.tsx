import React, { useState } from 'react';
import { Input } from '../../input';

const NMImageUploader = () => {
  const [imageFiles,setImageFiles]=useState<File[]|[]>([]);
  const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   const file = e.target.files![0];
   setImageFiles(prev=>[...prev,file]);
  }
  return (
    <div>
      <Input id='image-uploader' onCanPlay={handleImageChange} type='file' multiple accept='image/*'/>
      <label  className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition" htmlFor='image-uploader'>Upload Logo</label>
    </div>
  );
};

export default NMImageUploader;