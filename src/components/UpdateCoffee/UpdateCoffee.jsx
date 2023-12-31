import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, chef,supplier,taste,category,details,photo};

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Coffee is updated successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
          });

    }
    return (
        <div className=" bg-[#F4F3F0] p-16">
        <div>
        <h2 className="text-3xl font-semibold p-4 text-center">Update Existing Coffee</h2>
        </div>
   
         <form onSubmit={handleUpdateCoffee}>
           {/* Row Name & Chef */}
           <div className="flex mb-4">
             <div className="form-control mr-4 md:w-1/2">
               <label className="label">
                 <span className="label-text text-base">Name</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="name"
                   placeholder="Enter Coffee Name"
                   className="input input-bordered w-full"
                   defaultValue={name}
                 />
               </label>
             </div>
   
             <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text text-base">Chef</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="chef"
                   placeholder="Enter Chef "
                   className="input input-bordered w-full"
                   defaultValue={chef}
                 />
               </label>
             </div>
           </div>
           {/* Row Supplier & Taste */}
           <div className="flex  mb-4">
             <div className="form-control mr-4 md:w-1/2">
               <label className="label">
                 <span className="label-text text-base">Supplier</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="supplier"
                   placeholder="Enter Supplier Name"
                   className="input input-bordered w-full"
                   defaultValue={supplier}
                 />
               </label>
             </div>
   
             <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text text-base">Taste</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="taste"
                   placeholder="Taste"
                   className="input input-bordered w-full"
                   defaultValue={taste}
                 />
               </label>
             </div>
           </div>
           {/* Row Category & Details */}
           <div className="flex  mb-4">
             <div className="form-control mr-4 md:w-1/2">
               <label className="label">
                 <span className="label-text text-base">Category</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="category"
                   placeholder="Category"
                   className="input input-bordered w-full"
                   defaultValue={category}
                 />
               </label>
             </div>
   
             <div className="form-control md:w-1/2">
               <label className="label">
                 <span className="label-text text-base">Details</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="details"
                   placeholder="Details"
                   className="input input-bordered w-full"
                   defaultValue={details}
                 />
               </label>
             </div>
           </div>
           {/* photo row */}
           <div className="flex mb-4">
           <div className="form-control w-full">
               <label className="label">
                 <span className="label-text text-base">Photo</span>
               </label>
               <label className="input-group">
                 <input
                   type="text"
                   name="photo"
                   placeholder="Image URL"
                   className="input input-bordered w-full"
                   defaultValue={photo}
                 />
               </label>
             </div>
           </div>
           {/* Row Name & Chef */}
           <div className="flex  mb-4">
             <div className="form-control w-full ">
               <label className="input-group">
                 <input
                   type="submit"
                   value="Update Coffee"
                   className="input input-bordered w-full mt-8 bg-[#D2B48C] cursor-pointer text-2xl border-[#331A15] "
                 />
               </label>
             </div>
           </div>
         </form>
       </div>
    );
};

export default UpdateCoffee;