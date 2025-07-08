import React, { useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [image, setimage] = useState(null);
  const [data,setData]=useState({
    productName:"",
    description:"",
    category:"",
    price:""

  })
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setimage({file:file,
        preview:URL.createObjectURL(file)});
    }
  };


 const handleForm=(e)=>{
 const name=e.target.name;
 const value=e.target.value;
 setData({...data,[name]:value})
 console.log(data)
 }

 const submit=async()=>{
  try{
   const formData = new FormData();
    formData.append("name", data.productName);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("image", image.file); // ✅ actual image file

    const response = await axios.post('http://localhost:4000/api/food/add-food', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    console.log(response.data);
    if(response.data.success){
    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Item added successfully!',
  showConfirmButton: false,
  timer: 1500
});

    }
  }catch(err){
    console.log(err)


  }



 }
  return (
    <div>
      <form className="flex flex-col">
        <h2 className="pb-3.5">Upload Image</h2>
        <div className="flex flex-col ">
          {/* Hidden file input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImage}
          />

          {/* Label wraps image to trigger file input */}
          <label htmlFor="fileInput" className="cursor-pointer">
            <img
              className="h-32 w-32 object-cover "
              src={image?image.preview:  "./src/assets/photo.png"}
              alt="Preview"
            />
          </label>
        </div>
        <div  className="flex flex-col">
          <label htmlFor="productname">Product Name</label>
          <input onChange={(e)=>{handleForm(e)}} className="border-2 w-60" type="text" name="productName" id="productname" />
        </div>
        <div  className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea onChange={(e)=>{handleForm(e)}}  className="border-2 w-60" type="text" name="description" id="description" />
        </div>
        <div className="flex gap-9">
          
          <div  className="flex flex-col">
            <label htmlFor="category">Category</label>
           <select onChange={(e)=>{handleForm(e)}} className="border-2 w-60" id="category" name="category">
  <option value="">Select</option>
  <option value="Salad">Salad</option>
  <option value="Rolls">Rolls</option>
  <option value="Deserts">Deserts</option>
  <option value="Sandwitch">Sandwitch</option>
  <option value="Cake">Cake</option>
  <option value="Pure veg">Pure</option>
  <option value="Pasta">Pasta</option>
  <option value="Noodles">Noodles</option>
</select>
          </div>
          <div  className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input onChange={(e)=>{handleForm(e)}} className="border-2 w-20" type="text" name="price" id="price" />
          </div>
        </div>
       
      </form>
       <button onClick={()=>{submit()}} className="px-4 py-1.5 bg-black text-white border-2 mt-6 cursor-pointer">Add Item</button>
       

    </div>
  );
};

export default AddProduct;
