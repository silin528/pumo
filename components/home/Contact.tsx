'use client';

import Image from 'next/image';
import NavLink from '../NavLink';

let heroImages = ['/1.png', '/6.png', '/3.png', '/4.png', '/5.png', '/2.png'];

let bgImage = ['/bg-3.jpg']

export default function Contact() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl text-gray-800 font-extrabold mx-auto sm:text-3xl">
            _______ 联系我们 _______
          </h3>
          <p className='text-xl text-orange-500 mx-auto sm:text-xl '>CONTACT US</p>
        </div>
        <div className='mt-6 flex flex-col sm:flex-col justify-items-auto lg:flex-row '>
          <div className='flex-1'>
          运营部：GOPUAMO晖虎（中国）运营部
            <br /><br />
            广州市晖虎贸易有限公司
            <br /><br />
            联系电话：13631312672
          </div>
        </div>
      </div>
    </section>
  );
}
