import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const data =useLoaderData()
    console.log(data);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={data.pictureURL}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-xl">
            Toy name: {data.name}
            </h5>
          {
            data.sellerName && data.email? <>
              <h5 className="mb-3 text-gray-800  font-bold leading-none sm:text-lg">
            seller name :{data.sellerName}
            </h5>
            <h5 className="mb-3 text-gray-800  font-bold leading-none sm:text-lg">
            seller email: {data.email}
            </h5>
            </>:''
          }
            <h5 className="mb-3 text-gray-800  font-bold leading-none sm:text-lg">
            price: {data.price}
            </h5>
            <h5 className="mb-3 text-gray-800  font-bold leading-none sm:text-lg">
            rating: {data.rating}
            </h5>
            <h5 className="mb-3 text-gray-800  font-bold leading-none sm:text-lg">
            Available quantity: {data.quantity}
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Description</span>
              {data.description}
            </p>
            <div className="flex items-center">
             <Link to={'/'}>
             <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-3 mr-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500"
              >
               Back Home
              </button></Link>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;