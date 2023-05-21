import React from 'react';

const ExtraSectionTeam = () => {
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block text-white  mb-4 text-xl font-semibold tracking-wider  uppercase rounded-full bg-green-400 py-3 px-6">
          Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
        Our development team is a group of highly skilled professionals dedicated to creating innovative and high-quality software solutions. 
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center ">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="text-sm text-gray-800">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="text-sm text-gray-800">Design Team Lead</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Anthony Geek</p>
            <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="text-sm text-gray-800">Human Resources</p>
          </div>
        </div>
      
      </div>
    </div>
    );
};

export default ExtraSectionTeam;