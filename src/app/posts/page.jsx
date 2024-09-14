import { getPost } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';


const page = async () => {
    const postData = await getPost();
    console.log(postData)
    return (
        <div className='min-h-screen'>
            <h1>All Posts</h1>
            <div className='grid grid-cols-4 gap-6'>
                {
                  postData.map((post)=>(
                    <div key={post.id} className='border-2 p-6'>
                        <h1 className='font-bold text-xl'>{post.title}</h1>
                        <h1>{post.body}</h1>
                        <button className='p-2 bg-red-600 text-white'><Link href={`/posts/${post.id}`}>View Details</Link></button>
                    </div>
                  ))  
                }
            </div>
        </div>
    );
};

export default page;