"use client";

import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

// import { useUser } from '@clerk/nextjs';

export default function SimpleNavbar() {
  // const user = useUser()
  // console.log(user.user)
  return (
    <nav className="bg-gray-800 py-4 flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          Chat App
        </Link>
        <div className="space-x-4">
          <Link href="/forums" className="text-gray-300 hover:text-white text-aling-center">
            Forums
          </Link>
          <Link href="/chat" className="text-gray-300 hover:text-white">
            UserChat
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        
          <UserButton />
        
         
        </div>
      </div>
    </nav>
  );
}