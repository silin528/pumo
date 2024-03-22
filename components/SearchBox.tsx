import { SetStateAction, useState } from 'react';


export default function SearchBox() {

    let bgImage = ['/bg-3.jpg']

    return (
        <section>
            <div className="custom-screen pt-28 text-gray-600">
                <div className="space-y-5 max-w-2xl mx-auto text-center">
                    <div className='flex flex-col sm:flex-col justify-items-auto lg:flex-row '>
                        <form  className='flex-1'>
                            <div className='flex flex-col lg:flex-col sm:flex-col'>
                                <input className='rounded-md ' placeholder='查询手机号或者车牌号/质保单号' type="text" id="last" name="last" required />
                                <button className='bg-zinc-300 mt-2 rounded-m p-2' type="submit">查询</button>
                            </div>
                        </form>
                        <div className='flex-1'>
                            <img
                                src={bgImage[0]}
                                width="100%"
                                height="100%"
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}