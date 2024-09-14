import React from 'react';

const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}
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
                    </div>
                  ))  
                }
            </div>
        </div>
    );
};

export default page;