'use client';

import Image from 'next/image';
import NavLink from '../NavLink';

let bgImages = ['/bg/home_prodlist1.jpg', '/bg/home_prodlist4.jpg'];

export default function Product() {
    return (
        <section>
            {bgImages.map((item, idx) => {
                return (
                    <div className="space-y-5 max-w-2xl mx-auto text-center">
                        <div className="flex flex-row sm:flex-row lg:flex-row justify-center">

                            <div key={idx} className="duration-150 hover:text-white">
                                <img
                                    src={item}
                                    width="100%"
                                    height="100%"
                                    alt="Screenshots of the dashboard project showing desktop version"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
