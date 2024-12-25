'use client'

import React from 'react'
import { useState, useEffect} from 'react';


export default function News() {
    const [news, setNews] = useState([]);
    const [articleNum, setArticleNum] = useState(3);
    useEffect(() => {
        fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`)
        .then(res => res.json())
        .then((data) => {
            setNews(data.articles)
        })
    }, [])
  return (
    <div className='text-gray-700 space-y-3 bg-gray-200 rounded-xl pt-2'>
        <h2 className='font-bold text-black text-2xl px-4'>Top Headlines</h2>
        {news.slice(0, articleNum).map((article) => (
            <div key={article.url}>
                <a href={article.url} target='_blank'>
                    <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-300 transition duration-300'>
                        <div className='space-y-0.5'>
                            <h6 className='text-sm font-semibold'>{article.title}</h6>
                            <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
                        </div>
                        <img src={article.urlToImage} width={70}className='rounded-xl'/>
                    </div>
                </a>
            </div>
            
        ))}
        <button className='text-sm font-mono text-blue-500' 
        onClick={() => setArticleNum(articleNum + 3)}>
        Load more
        </button>
    </div>
  )
}
