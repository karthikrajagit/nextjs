import Link from 'next/link';
import { GiBrain } from "react-icons/gi";
import { HiHome } from 'react-icons/hi';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';
import MiniProfile from './MiniProfile';

export default function LeftSidebar() {
  return (
    <div className='flex flex-col justify-between h-screen items-center p-3'>
      {/* Top Section */}
      <div className='flex flex-col items-center gap-4 w-full'>
        {/* Logo */}
        <Link href='/'>
          <GiBrain className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200' />
        </Link>

        {/* Sign-in/Sign-out Button */}
      

        {/* Navigation Links */}
        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-full justify-center'
        >
          <HiHome className='w-7 h-7' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
        <button className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 px-6 py-2 shadow-md font-semibold'>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </button>
        <div>
        <SignedIn>
          <MiniProfile />
        </SignedIn>
      </div>
      </div>

     
    </div>
  );
}
