'use client'

import React from 'react'
import { FaXTwitter } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import Link from 'next/link';

import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import MiniProfile from './MiniProfile';

export default function LeftSidebar() {
  return (
    <div>
      <div className="flex flex-col p-3 gap-4">
        <Link href="/">
          <FaXTwitter
            size={30}
            className="w-16 h-16 cursor-pointer p-3 hover:bg-slate-200 rounded-full transition-all duration-300"
          />
        </Link>
        <Link
          href="/"
          className="flex items-center p-3 hover:bg-slate-200 rounded-full transition-all duration-300 gap-2 w-fit"
        >
          <HiHome className="w-7 h-7" />
          <span className="font-bold hidden xl:inline">Home</span>
        </Link>

        {/* Conditional buttons for Sign In/Sign Out */}
        <SignedIn>
          <SignOutButton>
            <button className="bg-green-500 hover:bg-green-400 rounded-full text-white font-bold transition-all duration-300 w-48 h-9 shadow-md hidden xl:inline">
              Sign Out
            </button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="bg-green-500 hover:bg-green-400 rounded-full text-white font-bold transition-all duration-300 w-48 h-9 shadow-md hidden xl:inline">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      <div className="mt-10">
        <SignedIn>
          <MiniProfile />
        </SignedIn>
      </div>
    </div>
  );
}
