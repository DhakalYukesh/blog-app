import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] overflow-hidden bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <div className="relative w-[300px] h-80 overflow-hidden bg-white border-b border-black">
          <Image src={image} alt="" layout="fill" objectFit="contain" />
        </div>
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description.slice(0, 150)}...
        </p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center"
        >
          Read more{" "}
          <Image src={assets.arrow} className="ml-2" alt="" width={12} />
        </Link>
      </div>
    </div>
  );
};
