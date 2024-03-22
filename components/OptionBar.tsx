import React from 'react';
import Link from 'next/link';

export default function OptionBar() {

    let tab = [
        {
            "name": "产品中心",
            "icon": "/icon/home_about1.png",
            "path": ""
        },

        {
            "name": "车贴报价",
            "icon": "/icon/home_about2.png",
            "path": ""
        },

        {
            "name": "质保录入",
            "icon": "/icon/home_about3.png",
            "path": "/add"
        },
        {
            "name": "质保查询",
            "icon": "/icon/home_about4.png",
            "path": "/search"
        }
    ]

    return (
        <section>
            <div className="bg-black pt-4 pd-4 opacity-75 bg-image">
                <div className="space-y-5 max-w-full mx-auto text-center  ">
                    <div className="flex justify-center space-x-4 rounded-md ">
                        {tab.map((item, idx) => {
                            return (
                                <div key={idx} className="duration-150 hover:text-white">
                                    <Link href={item.path} className="">
                                    <div className="flex flex-col m-2">
                                        <img src={item.icon} width="100%" height="100%" alt={""} />
                                        <text className='mt-2 md-2' >{item.name}</text>
                                    </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}