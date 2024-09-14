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
        <div className='h-screen'>
            post page
        </div>
    );
};

export default page;