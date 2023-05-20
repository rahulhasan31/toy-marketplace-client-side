import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data=useLoaderData()
    const [update, setUpdate]=useState(data)

    console.log(data);

    const handleUpdateUser = event =>{
        event.preventDefault();
        console.log(update);
        fetch(`http://localhost:3000/update/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('Toys updated')
                console.log(data);
            }
            
        })
    }
    const handleInputChange=(event)=>{
        const field = event.target.name;
        const value = event.target.value;
        const newUpdate = {...update}
        newUpdate[field] = value;
        setUpdate(newUpdate);
        console.log(field);
    }
    return (
        <>
            <form onSubmit={handleUpdateUser} className="flex flex-col gap-4 p-20 mx-auto w-4/5">
             
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Price1"
                            value="Your Price"
                        />
                    </div>
                    <TextInput onChange={handleInputChange}
                        id="Price1"
                        type="text"
                        placeholder="Price"
                        required={true}
                        name="price"
                        defaultValue={update.price}
                    />
                </div>
            
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Availablequantity1"
                            value="Available quantity"
                        />
                    </div>
                    <TextInput onChange={handleInputChange}
                        id="Availablequantity1"
                        type="text"
                        placeholder="Available Quantity"
                        required={true}
                        name="availableQuantity"
                        defaultValue={update.quantity}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="DetailDescription1"
                            value="Detail description"
                        />
                    </div>
                    <TextInput onChange={handleInputChange}
                        id="DetailDescription1"
                        type="text"
                        placeholder="Detail Description"
                        required={true}
                        name="detailDescription"
                        defaultValue={update.description}
                    />
                </div>
            




                <Button type="submit">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default Update;