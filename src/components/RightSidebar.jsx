'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import News from './News';


export default function RightSidebar() {
  const router = useRouter()
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim==='' || !input) return;
    router.push(`/search/${input}`);
    setTimeout(() => {
      router.refresh();
    }, 100)
  }
  return (
    <>
      <div className='sticky top-0 bg-white p-2'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}
          className='rounded-3xl bg-gray-200 border border-gray-300 text-sm w-full px-4 py-3'
          />
        </form>
      </div>
      <News/>
    </>
  )
}
