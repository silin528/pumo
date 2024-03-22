import React from 'react';
import Link from 'next/link';

export default function bgImage({
    params,
  }: {
    params: {
      path: string;
    };
  }) {

    return (
        <section>
            <div className="bg-black pt-4 pd-4 opacity-75 bg-image">
                <div className="space-y-5 max-w-full mx-auto text-center  ">
                    <img src={params.path} width="100%" height="100%" alt={""} />
                </div>
            </div>
        </section>
    )
}