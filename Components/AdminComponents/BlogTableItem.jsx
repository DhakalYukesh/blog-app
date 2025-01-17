import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ authorImg, title, author, date }) => {
    const blogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
          alt=""
        />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No Title"}</td>
      <td className="px-6 py-4">{blogDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer">✖</td>
    </tr>
  );
};

export default BlogTableItem;
