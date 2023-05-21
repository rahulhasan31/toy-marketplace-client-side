import axios from 'axios';
import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/UseTitle';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    useTitle("All Toy")
const [allToys, setAllToys]=useState([])
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async () => {
  try {
    const response = await axios.get('http://localhost:3000/my-toys/search', {
      params: { searchTerm },
    });
    setSearchResults(response.data);
  } catch (error) {
    console.error(error);
  }
};
useEffect(()=>{
    fetch('http://localhost:3000/all-toys')
    .then(res=>res.json())
    .then(data=> setAllToys(data))
},[])

console.log(searchResults);
    return (
        <div className=''>
         <div className="  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid gap-10 lg:grid-cols-2  ">
        <div className="lg:pr-10">
          <Link
            to="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-300 ">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </Link>
          <h5 className="mb-4 text-4xl font-extrabold  ">
        <span className='text-green-500 '>  Hey Wellcome to</span>
            <br className="hidden md:block" />
            <span className='text-yellow-300 '>Best One</span>{' '}
            <span className="inline-block text-red-500">
            All Toys 
            </span>
          </h5>
          <p className="mb-6 text-gray-900">
          At Best One Sports Toys House, we are dedicated to providing the ultimate playground of fun and excitement for sports enthusiasts of all ages. Step into our world and experience a wide range of high-quality sports toys that will ignite your passion for active play.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-blue-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-red-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              to="/"
              className="text-blue-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
            <Link
              to="/"
              className="text-red-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
            className="object-cover w-full h-56  rounded-sm  sm:h-96"
            src="https://i.pinimg.com/564x/de/db/5b/dedb5ba7941216f381e96976b0cca370.jpg"
            alt=""
          />
        </div>
      </div>
    </div>  
    <div data-aos="fade-up"
     data-aos-duration="3000" className='text-center'>
      <input
        type="text"
        placeholder="Search by Toy Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-green-500 px-5 py-3 rounded-s-lg"
      />
      <button className='inline-flex items-center font-semibold transition-colors duration-200 text-white bg-green-500 px-5 py-3  rounded-r-lg' onClick={handleSearch}>Search</button>

      <ul>
        {
          searchResults.length>0 ?<p className='mt-2 text-red-500 font-medium'>This Name Toy Available {searchResults.length}</p>:''
        }
        {searchResults?.map((toy) => (
          <li key={toy._id} className="text-lg border border-green-500 w-96 text-center mx-auto mt-3">{toy.name}</li>
        ))}
      </ul>
    </div>
            <div data-aos="fade-up"
     data-aos-duration="3000" className='p-10  '>
        <Table striped={true}>
          <Table.Head className=''>
            <Table.HeadCell>
              Picture 
            </Table.HeadCell>

            <Table.HeadCell>
              Toy Name
            </Table.HeadCell>
            <Table.HeadCell>
            seller name
            </Table.HeadCell>
            <Table.HeadCell>
            Sub-category 
            </Table.HeadCell>
            <Table.HeadCell>
            Price
            </Table.HeadCell>
            <Table.HeadCell>
            Rating
            </Table.HeadCell>
            <Table.HeadCell>
            Available quantity
            </Table.HeadCell>
            <Table.HeadCell>
            Detail description
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          {
              searchResults.length? searchResults.map(toy=><AllToysCard key={toy._id} toy={toy}></AllToysCard> ) : allToys.map(toy=><AllToysCard key={toy._id} toy={toy}></AllToysCard> )
            }
        </Table>
       
      </div>
          
        </div>
    );
};

export default AllToys;