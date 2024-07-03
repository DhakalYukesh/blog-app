import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

// API endpoint to get all of the available blogs
export async function GET(request) {
  const blogs = await BlogModel.find({});
  return NextResponse.json({blogs});
}

// API endpoint for uploading blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;

  // Save image in the public folder
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;
    
  // Save other data in the database
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`
  }

  await BlogModel.create(blogData);
  console.log("Blog saved!");

  return NextResponse.json({ success: true, msg: "Blog added!" });
}
