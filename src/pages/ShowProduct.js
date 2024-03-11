import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { getOneProduct } from '../redux/actions/productAction';
import { UseDispatch, useDispatch } from 'react-redux';

function ShowProduct() {
  const {id}= useParams();
  const [data, setData] = useState('');
  const dispatch = useDispatch();

useEffect (() => {
  const handleClick = async () => {
  try {
    await dispatch(getOneProduct(id,setData));
  } catch (error) {}
}
handleClick()
}, [])




const arr = Object.keys(data).map((key) => { return  (
  
  <div> 
    <div classname = "product-container">
          <div className="product-image">
            <img
              className="image"
              src={`http://localhost:8000/images/` + data[key].thumbnailImage}
              alt="image of product"
              />
          </div>

            <div className="product-title">{data[key].title}</div>
           <p className='product-description'>{data[key].description}</p>
            <p className='product-category'>{data[key].category}</p>
            <p className='product-brandname'>{data[key].brandname}</p>
            <p className="product-price"></p>
            <p className="product-discount">{data[key].discount + "off"}</p>

          </div>
  </div>  
  
  )});

  return (
    <div>
      <div>{arr}</div>
    </div>
  )
}

export default ShowProduct
