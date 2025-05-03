import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

    // HOOKS
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    });

    // EVENT HANDLERS
    const imageHandler =(e)=>{
        setImage(e.target.files[0]);
    }//STORES UPLOAD IN THE IMAGE STATE VARIABLE

    const changeHandler=(e)=>{//this fuctions creates a object and stores it in the productDetails variable
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product=async()=>{//TO UPLOAD THE PICTURE TO THE THE STATE OBJECT PRODUCTDETATILS
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image)

        await fetch('http://localhost:8000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);

            await fetch('http://localhost:8000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }


  return (
    <div className='add-product'>
       <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" value={productDetails.name} onChange={changeHandler} name='name' placeholder='Type here'/>
       </div>
       <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input type="text"value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here' />
        </div>
       </div>
       <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandler} className="add-product-selector">
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Kids">Kids</option>
        </select>
       </div>
       <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image ):upload_area} onChange={changeHandler} className='addproduct-thumnail-img' alt="upload-product-image" />
        </label>
        <input onChange={imageHandler}  type="file" name='image' id='file-input' hidden/>
       </div>
       <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
