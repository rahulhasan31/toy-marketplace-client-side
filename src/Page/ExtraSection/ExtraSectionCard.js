import React from 'react';

const ExtraSectionCard = () => {
    return (
        <>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-10">
                <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
                           Toy Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg  text-2xl leading-none tracking-tight py-2   mb-4  font-semibold  text-white uppercase rounded-full bg-green-400 sm:text-2xl md:mx-auto">
                        <span className="relative inline-block">
                            
                            <span className="relative">Lamborghini Toys</span>
                        </span>{' '}
                        Gallery
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                    Welcome to the Lamborghini Toys Gallery! Here, you will discover a world of exquisite and captivating Lamborghini-themed toys that embody the spirit of the iconic Italian luxury car brand.
                    </p>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000" className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                    <div className="grid grid-cols-2 gap-5">
                        <img
                         data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000"
                            className="object-cover w-full h-56 col-span-2 rounded-xl shadow-lg border-2 border-green-500 p-1"
                            src="https://static-01.daraz.com.bd/p/6791e4a3899a96c9b16ff566a0474c5c.jpg"
                            alt=""
                        />
                        <img
                         data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000"
                            className="object-cover w-full h-48 rounded shadow-lg border-2 border-green-500 p-1"
                            src="https://i.ytimg.com/vi/1MjAZ7ZXOGk/maxresdefault.jpg"
                            alt=""
                        />
                        <img
                         data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000"
                            className="object-cover w-full h-48 rounded shadow-lg border-2 border-green-500 p-1"
                            src="https://images-cdn.ubuy.co.in/633aad0dcb0629168c563ca3-toy-cars-sian-fkp3-metal-model-car-with.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="pb-4 mb-4 border-b">
                            <h6 className="mb-2 font-semibold leading-5 text-green-500">
                                Lambo Sian FKP3 Metal Model Car
                            </h6>
                            <p className="text-sm text-gray-900">
                                The model car is perfect for Lamborghini Sian FKP37 obsessed boys. Toy car opening doors and engine compartment, the model car has movable parts, lights and hood open to see the motor.

                            </p>
                        </div>
                        <div className="pb-4 mb-4 border-b">
                            <h6 className="mb-2 font-semibold leading-5 text-green-500">
                                HyperSpec 1:24 Lamborghini
                            </h6>
                            <p className="text-sm text-gray-900">
                                The most high powered vehicles with the most eye catching designs, this Lamborghini Huracan Performante is brought to you in a 1:24 die - cast model
                            </p>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5 text-green-500">
                                Lamborghini Terzo Millennio Lime Blue
                            </h6>
                            <p className="text-sm text-gray-900">
                                Authentically licensed product from Lamborghini
                                The most high powered vehicles with the most eye catching designs, this Lamborghini Huracan Performante is brought to you in a 1:24 die - cast model
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtraSectionCard;