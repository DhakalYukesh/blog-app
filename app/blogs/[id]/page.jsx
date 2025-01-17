"use client";
import { assets, blog_data } from "@/Assets/assets";
import { Footer } from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get("/api/blog", {
        params: { id: params.id },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchBlogData();
    console.log(data);
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started <Image src={assets.arrow} alt="" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          placeat, numquam facere itaque doloribus exercitationem rem sunt
          reiciendis repudiandae magni!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          placeat, numquam facere itaque doloribus exercitationem rem sunt
          reiciendis repudiandae magni!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          placeat, numquam facere itaque doloribus exercitationem rem sunt
          reiciendis repudiandae magni!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          placeat, numquam facere itaque doloribus exercitationem rem sunt
          reiciendis repudiandae magni!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          placeat, numquam facere itaque doloribus exercitationem rem sunt
          reiciendis repudiandae magni!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          placeat, numquam facere itaque doloribus exercitationem rem sunt
          reiciendis repudiandae magni!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          exercitationem vitae repudiandae praesentium in tenetur incidunt
          consequatur fugiat, soluta earum ea ratione unde dolor, veritatis
          voluptas explicabo temporibus. Omnis accusantium eius aperiam animi
          libero aspernatur quisquam tempore, eaque recusandae obcaecati ad
          natus?
        </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
