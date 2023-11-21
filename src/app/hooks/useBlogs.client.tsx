'use client'
import { useState, useEffect } from 'react';
import connectDB from '@/database/helpers/db'
import Blog from '@/database/blogSchema';
import { IBlog } from "@/database/blogSchema";

async function getBlogs(): Promise<IBlog[] | null> {
    await connectDB();
  
    try {
      const blogs = await Blog.find().sort({ date: -1 }).orFail();
      return blogs; // blogs are of type IBlog[]
    } catch (err) {
      console.error('Error fetching blogs:', err);
      return null; // Explicitly returning null in case of error
    }
  }


export default function useBlogs() {
    const [blogs, setBlogs] = useState<IBlog[] | null>(null);
  
    useEffect(() => {
      async function fetchBlogs() {
        try {
          const fetchedBlogs = await getBlogs(); // This will be IBlog[] or null
          setBlogs(fetchedBlogs);
        } catch (err) {
          console.error('Error fetching blogs:', err);
        }
      }
  
      fetchBlogs();
    }, []);
  
    return blogs;
  }