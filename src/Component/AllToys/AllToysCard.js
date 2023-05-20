import { Avatar, Card, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({toy}) => {
    const {pictureURL, name, price, rating, sellerName, email, description , subCategory,_id ,quantity
    }=toy
    return (
        <>
            <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      <div className="flex flex-wrap gap-2">
  <Avatar
    img={pictureURL}
    rounded={true}
    bordered={true}
    color="success"
  />
  
</div>
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {name}
      </Table.Cell>
      <Table.Cell>
        {sellerName}
      </Table.Cell>
      <Table.Cell>
       {subCategory}
      </Table.Cell>
      <Table.Cell>
        {price}
      </Table.Cell>
      <Table.Cell>
        {rating}
      </Table.Cell>
      <Table.Cell>
        {quantity}
      </Table.Cell>
      <Table.Cell>
      {description?.slice(0, 20)+'...'}
      </Table.Cell>
      <Table.Cell>
      <Link to={`/details/${_id}`}>
             <button
                type="submit"
                className=" items-center justify-center w-45 h-10 px-3  font-medium  text-white transition duration-200 rounded shadow-md bg-green-500"
              >
                View Details
              </button>
             </Link>
      </Table.Cell>
      <Table.Cell>
      {/* <button onClick={()=>handleDelete(_id)}
                type="submit"
                className="inline-flex items-center justify-center h-6 px-3 mr-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500"
              >
                Delete
              </button> */}
      </Table.Cell>
    </Table.Row>
 
  </Table.Body>
        </>
    );
};

export default AllToysCard;