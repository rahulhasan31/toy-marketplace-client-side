import React from 'react';
import { Link } from 'react-router-dom';

const Branner = () => {
    return (
        <>
           
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div data-aos="zoom-in" className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-200">
            <svg className="text-teal-900 w-7 h-7 " viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div data-aos="zoom-in" className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-green-400 sm:text-4xl sm:leading-none">
            Hey Wellcome to
              <br className="hidden md:block" />
              Best One {' '}
              <span className="inline-block text-deep-purple-accent-400 text-red-500">
              Sports Toys House
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-md">
            At Best One Sports Toys House, we are dedicated to providing the ultimate playground of fun and excitement for sports enthusiasts of all ages. Step into our world and experience a wide range of high-quality sports toys that will ignite your passion for active play.


            </p>
          </div>
          <div>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-white bg-green-500 px-5 py-3  rounded-full "
            >
              Home
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://i.pinimg.com/564x/0e/0c/18/0e0c18173f07eddbbb7f7bb41cb42eb7.jpg"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://i.pinimg.com/564x/3a/55/6e/3a556eebcd3af5504ceb6c7839532dce.jpg"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://i.pinimg.com/564x/c5/fb/08/c5fb08131a0de6c4a9f0b1d26b0de14c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default Branner;