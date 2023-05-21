import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext,  } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';
import useTitle from '../../Hook/UseTitle';

const AddToy = () => {
    useTitle("Add Toy")
    const { user } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const pictureURL = form.pictureURL.value
        const name = form.name.value
        
        const subCategory = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const availableQuantity = form.AvailableQuantity.value
        const detailDescription = form.DetailDescription.value
     

        const data = {
            pictureURL,
            name,
            sellerName:user?.displayName,
            subCategory,
            price,
            rating,
            availableQuantity,
            detailDescription,
            email:user?.email

        }
    

        console.log(data)
       
        fetch('http://localhost:3000/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            Swal.fire(
                `Good job!${user.displayName} is added successfully`,
                'You clicked the button!',
                'success'
              )
            // toast.success(`${data.name} is added successfully`);
            navigate('/my-toy')
        })
    }

 
    return (
        <>
        
            <form data-aos="fade-up"
     data-aos-duration="3000" onSubmit={handleSubmit} className="flex flex-col gap-4 p-20 mx-auto w-4/5">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo1"
                            value="Your Picture URL"
                        />
                    </div>
                    <TextInput
                        id="photo1"
                        type="text"
                        placeholder="Picture URL"
                        required={true}
                        name="pictureURL"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Your Car Name"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        type="name"
                        placeholder="Your Car Name"
                        required={true}
                        name="name"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="SellerName"
                            value="Your Seller Name "
                        />
                    </div>
                    <TextInput
                        id="SellerName"
                        type="text"
                       defaultValue={user?.displayName}
                        required={true}
                        name="SellerName"
                        readOnly
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="SellerEmail"
                            value="Your Seller Email"
                        />
                    </div>
                    <TextInput
                        id="SellerEmail"
                        type="text"
                        defaultValue={user?.email}
                        required={true}
                        name="SellerEmail"
                        readOnly
                    />
                </div>
                <div>
                <select
            id="subCategory"
            name="subCategory"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="Lamborghini">Lamborghini</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Race Car">Race Car</option>
            <option value="Trucks">Trucks</option>
            <option value="Mini Police Cars">Mini Police Cars</option>
          </select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Price1"
                            value="Your Price"
                        />
                    </div>
                    <TextInput
                        id="Price1"
                        type="text"
                        placeholder="Price"
                        required={true}
                        name="price"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Rating1"
                            value="Your Rating"
                        />
                    </div>
                    <TextInput
                        id="Rating1"
                        type="text"
                        placeholder="Rating"
                        required={true}
                        name="rating"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Availablequantity1"
                            value="Available quantity"
                        />
                    </div>
                    <TextInput
                        id="Availablequantity1"
                        type="text"
                        placeholder="Available Quantity"
                        required={true}
                        name="AvailableQuantity"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="DetailDescription1"
                            value="Detail description"
                        />
                    </div>
                    <TextInput
                        id="DetailDescription1"
                        type="text"
                        placeholder="Detail Description"
                        required={true}
                        name="DetailDescription"
                    />
                </div>
            




                <Button className='bg-green-500' type="submit">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default AddToy;