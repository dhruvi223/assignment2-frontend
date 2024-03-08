import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { getOneProduct } from '../redux/actions/productAction';
import { UseDispatch, useDispatch } from 'react-redux';

function ShowProduct() {
  const {id}= useParams();
  const [data, setData] = useState('');
  const dispatch = useDispatch();

const handleClick = async () => {
  console.log('called');
        try {
          await dispatch(getOneProduct(id,setData));
        } catch (error) {}
}


console.log(data);


const arr = Object.keys(data).map((key) => { return  (
  
  <div> 
    <div classname = "product-container">
          <div className="product-image">
            <img
              className="product-image"
              src={`http://localhost:8000/images/` + data[key].thumbnailImage}
              alt="image of product"
              />
          </div>

          <div class="product-info">
            <div class="product-title">{data[key].title}</div>
           <p>{data[key].description}</p>
            <p>{data[key].category}</p>
            <p>{data[key].brandname}</p>
            <p class="product-price">{data[key].price}</p>
            <p class="product-discount">{data[key].discount + "off"}</p>
          </div>

          <div>
            <span>
              {"price:" + data[key].price}
            </span>
              </div>
          </div>
  </div>  
  
  )});

  return (
    <div>
      <button onClick={handleClick}>button</button>
      <div>{arr}</div>
    </div>
  )
}

export default ShowProduct
