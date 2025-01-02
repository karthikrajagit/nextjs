import Comments from '@/components/Comment';
import Post from '@/components/Post';
import Link from 'next/link';
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi';

export default async function Postpage({params}) {
  let data = null;
  try {
     const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({
        postId: params.id
      })
    })
    data = await result.json();
    console.log(result);
  }
  catch(error)
  {
    console.error('Error fetching posts:', error);
  }
  return (
    <div className='max-w-xl mx-auto border-r border-l min-h-screen'>
      <div className='flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-500'>
        <Link href='/' className='hover:bg-gray-100 rounded-full p-2'>
          <HiArrowLeft className='h-5 w-5'/>
        </Link>
        <h2 className='sm:text-lg'>Back</h2>
      </div>
      {!data && <h2 className='text-center mt-5 text-lg'>Post not found</h2>}
      {data && <Post post={data}/>}
      {data && <Comments comments={data.comments}/>}
    </div>
  )
}
