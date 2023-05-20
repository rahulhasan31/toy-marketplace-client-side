import axios from 'axios';
import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';

const AllToys = () => {
const [allToys, setAllToys]=useState([])
const [searchText, setSearchText] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async () => {
  try {
    const response = await axios.get('http://localhost:3000/all-toys', {
      params: {
        name: searchText
      }
    });
    setSearchResults(response.data);
  } catch (error) {
    console.error('Error searching for toys:', error);
  }
};
useEffect(()=>{
    fetch('http://localhost:3000/all-toys')
    .then(res=>res.json())
    .then(data=> setAllToys(data))
},[])

console.log(allToys);
    return (
        <div className=''>
             <div>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search by Toy Name"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((toy, index) => (
          <li key={index}>{toy.name}</li>
        ))}
      </ul>
    </div>
            <div className='p-10'>
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
                allToys.map(toy=><AllToysCard key={toy._id} toy={toy}></AllToysCard> )
            }
        </Table>
      </div>
          
        </div>
    );
};

export default AllToys;