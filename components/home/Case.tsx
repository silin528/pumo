'use client';

import Image from 'next/image';
import NavLink from '../NavLink';

let heroImages = ['/c1.jpeg', '/c2.jpeg', '/c3.jpeg', '/c4.jpeg', '/5.png', '/2.png'];

export default function Product() {
    return (
        <section>
            <div className="custom-screen pt-28 text-gray-600">
                <div className="space-y-5 max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl text-gray-800 font-extrabold mx-auto sm:text-3xl">
                        _______ 施工案例 _______
                    </h3>
                    <p className='text-xl text-orange-500 mx-auto sm:text-xl '>EXAMPLE</p>
                </div>
            </div>
            <p></p>
            <p></p>
            <div>
                <div className='flex flex-row sm:flex-col lg:flex-row  justify-center'>
                    <div className='flex-1'>
                        <img
                            src={heroImages[0]}
                            width="100%"
                            height="100%"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                    <div className='flex-1'>
                        <img
                            src={heroImages[1]}
                            width="100%"
                            height="100%"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                    <div className='flex-1'>
                        <img
                            src={heroImages[2]}
                            width="100%"
                            height="100%"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                    <div className='flex-1'>
                        <img
                            src={heroImages[3]}
                            width="100%"
                            height="100%"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
