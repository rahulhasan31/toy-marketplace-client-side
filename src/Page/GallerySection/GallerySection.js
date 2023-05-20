import React from 'react';

const GallerySection = () => {
    return (
        <>
             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute  top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-yellow-300">Hey</span>
          </span>{' '}
          <span className='text-green-400'>Wellcome to Our Shop</span>  <span className='text-red-500'>Gallery</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        At Our Shop Gallery, we take pride in curating a diverse and captivating collection of art and unique items. Step into our gallery, and you'll discover a world of creativity and inspiration.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto ">
        <img
          className="object-cover w-full h-56 rounded shadow-lg border border-green-400"
          src="https://i.ibb.co/BPmBvpZ/Race-car-rafiki.png"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded border border-green-400 shadow-lg"
          src="https://i.ibb.co/3ygp2Lm/Race-car-bro.png"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded border border-green-400 shadow-lg"
          src="https://i.ibb.co/kcT54zf/Race-car-pana.png"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded border border-green-400 shadow-lg"
          src="https://i.ibb.co/th6vnxB/Race-car-cuate.png"
          alt=""
        />
      </div>
     
    </div>
        </>
    );
};

export default GallerySection;