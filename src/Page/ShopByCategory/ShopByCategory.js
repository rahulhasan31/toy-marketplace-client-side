import React, { useContext, useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';

const ShopByCategory = () => {
  const{user}=useContext(AuthContext)
  const [data, setData]=useState([])
 
  useEffect(()=>{
    fetch('http://localhost:3000/toys')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])


console.log(data);


const needLogin=()=>{
  return Swal.fire({
    icon: 'error',
    title: 'NO ENTRY WITHOUT PERMISSION!!!! IF YOU NEED PERMISSION PLEASE LOGIN...',
    footer: '<a href="/login">Login Now </a>'
  })
}
  
    return (
        <>
  <h1 data-aos="fade-up"
     data-aos-duration="3000" className='mx-auto text-center text-xl bg-green-400 py-3 px-4 w-56 rounded-full text-white font-semibold'>Shop By Category</h1>
  <Tabs data-aos="fade-up"
     data-aos-duration="3000" className="text-center p-20">
        <TabList>
          {data.map((category, index) => (
            <Tab key={index}>{category.CategoryName}</Tab>
          ))}
        </TabList>

        {data.map((category, index) => (
          <TabPanel  key={index}>
            <div className="grid lg:grid-cols-2 gap-4">


              {category.toys.map((toy, subIndex) => (

                
                <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" key={subIndex} className="bg-white p-4 shadow-xl border-2 border-green-400">
                  <div className="bg-white rounded-lg  overflow-hidden">
                    <div className="lg:flex">
                      {/* Image side */}
                      <div className="lg:w-1/2">
                        <figure>
                          <img
                          
                            src={toy.pictureURL}
                            alt={toy.name}
                            className=" w-5/2 h-1/2 mb-2 "
                          />
                        </figure>
                      </div>

                      {/* Text side */}
                      <div className="lg:w-1/2 p-6">
                        <div className="card-body">
                          <h3 className="text-lg font-bold">Toy Name: {toy.name}</h3>
                          <div className=" items-center mb-2">
                            <span className="text-yellow-500 ">
                               Rating:{toy.rating} <i className="fas fa-star"></i>
                            </span>
                           

                            <p>Quantity:{toy._id}</p>
                          </div>

                          <p className="text-gray-600 ">Price:${toy.price}</p>

                        {
                          user?.email?<>
                            <button className="bg-green-500 btn-sm text-white px-5  rounded">
                            <Link to={`/toysDetails/${toy._id}`}> View details</Link>
                          </button></>: <button 
                        onClick={needLogin} className="bg-green-500 btn-sm text-white px-5  rounded">
                            <Link > View details</Link>
                          </button>
                        }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>

 
        </>
    );
};

export default ShopByCategory;