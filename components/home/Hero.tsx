'use client';

import Image from 'next/image';
import NavLink from '../NavLink';

let heroImages = ['/1.png', '/6.png', '/3.png', '/4.png', '/5.png', '/2.png'];

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-white font-extrabold mx-auto sm:text-6xl">
            GOPUAMO晖虎 - 贴心保护您的座驾！
          </h1>
        </div>
      </div>
    </section>
  );
}
