import {  Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';
import useTitle from '../../Hook/UseTitle';
import MyToysCard from './MyToysCard';

const MyToys = () => {
  useTitle("My Toy")
  const { user } = useContext(AuthContext)
  const [toysData, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/my-toys/${user?.email}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [user?.email])

  console.log(toysData)

  const handleDelete = id => {
    const procced = window.confirm("Are Sure Delete your Toy?")

    if (procced) {
      fetch(`http://localhost:3000/update/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0)
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          const remainin = toysData.filter(r => r._id !== id)
          setData(remainin)
          console.log("remainin", remainin);

        })
    }
  }
  return (
    <>
         <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  mt-5">
      <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Toy Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span className="relative text-red-500">Hey</span>
          </span>{' '}
           <span className='text-green-500'>Wellcome to My Toys</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Thank you for choosing "My Toys" as your go-to destination for all things fun and playful. We look forward to serving you and making your toy shopping experience exceptional in every way
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
            className="object-cover w-full h-56 rounded p-5 sm:h-64 md:h-80 lg:h-96"
            src="https://i.pinimg.com/564x/82/36/86/82368662c2400c206e4f874e39347b91.jpg"
            alt=""
          />
          
        </div>
      </div>
    </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className='p-10'>
       {toysData.length>0? <Table striped={true}>
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
            toysData.map(toys => <MyToysCard handleDelete={handleDelete} key={toys._id} toys={toys} ></MyToysCard>)
          }
        </Table>:<h1 className='text-green-500 font-medium text-2xl text-center'> You Not Add Toys If You Wish Add Toy Please Go Add Section <Link className='text-red-500 font-semibold underline' to={'/add-toy'}>Clike Here</Link></h1>}
      </div>
    </>
  );
};

export default MyToys;