import { SetStateAction, useState } from 'react';


export default function BrandInfo() {
    return (
      <section>
        <div className="custom-screen pt-28 text-gray-600">
          <div className="space-y-5 max-w-2xl mx-auto text-center">
            <div className='flex flex-col sm:flex-col justify-items-auto lg:flex-row '>
              <img
                src="/p2_m.jpg"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }