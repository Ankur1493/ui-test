
// app/page.tx
'use client';

import React from 'react';
import { BackgroundBeamsWithCollision } from '@/components/background-beams-with-collision';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background diagonal split */}
      <div className="absolute inset-0 bg-gray-50">
        <BackgroundBeamsWithCollision>
          <div className="absolute inset-0 w-[60%] border-red-50 h-full bg-gradient-to-tr from-orange-500 to-orange-300 clip-path-custom"></div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Content */}
      <div className="relative  z-10 bg-white rounded-lg shadow-sm shadow-gray-500  p-8 max-w-xl w-full text-center">
        <div className="flex flex-col ">
          {/* Placeholder for Profile Picture */}
          <img className='h-16 w-16 mx-auto' alt='Company Logo' src='https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75' />

          {/* Title */}
          <div className='mb-4'>
            <h2 className="text-2xl text-gray-800 font-bold ">Calenso</h2>
          </div>
          {/* Form Questions */}

          <div className="text-left space-y-2">
            <p className='text-gray-800 font-medium text-xl text-left'>Drop a review or feedback</p>
            <div className="text-gray-700">
              <p className="font-semibold">Q. Name Of The Company</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Q. Field or Domain</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Q. Current Users at your platform</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 space-y-4 w-full">
            <button className="bg-orange-500 hover:bg-orange-600 duration-300 text-white py-2 px-6 rounded-md w-full">
              Record a video
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 duration-300  text-white py-2 px-6 rounded-md w-full">
              Write a Testimonial
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 60% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}

