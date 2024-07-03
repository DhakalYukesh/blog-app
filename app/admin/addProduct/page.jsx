"use client";
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image, setImage] = useState(false);

  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='' />
        </label>

        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Blog Title</p>
        <input type="text" placeholder='Type here' required className='w-full sm:w-[500px] mt-4 px-4 py-3 border' />
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea type="text" placeholder='Write content here' rows={6} required className='w-full sm:w-[500px] mt-4 px-4 py-3 border' />
        <p className='text-xl mt-4'>Blog Category</p>
        <select name="category" className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </>
  )
}

export default page