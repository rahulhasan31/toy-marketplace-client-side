import { Checkbox, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
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
          }).then((result) => {
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
            toysData.map(toys => <MyToysCard handleDelete={handleDelete} key={toys._id} toys={toys} ></MyToysCard>)
          }
        </Table>
      </div>
    </>
  );
};

export default MyToys;