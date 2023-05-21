import React from 'react';

const ExtraSectionTeam = () => {
    return (
        <div data-aos="fade-down" className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:">
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
           data-aos="flip-right"
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="text-sm text-gray-800">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
           data-aos="flip-right"
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="text-sm text-gray-800">Design Team Lead</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
           data-aos="flip-right"
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Anthony Geek</p>
            <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
           data-aos="flip-right"
            className="object-cover w-20 h-20 mb-2 rounded-full shadow border-2 p-1 border-green-500"
            src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
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