import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { allProduct } from '../redux/actions/productAction';
import styles from "../index.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ShowList() {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  
  const handleClick = (id) => {
    navigate(`/showproduct/${id}`);
  }



  useEffect(() => {
    const fetchData = async () => {
        try {
          await dispatch(allProduct(setData));
        } catch (error) {}
      };
      fetchData();

  }, [dispatch, setData])

  console.log(data);
  console.log(typeof data);
  console.log(data instanceof Array);
  
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
              <button onClick={() => handleClick(data[key].id)} class="view-more-button">view product</button>
          </div>
  </div>  
  
  )});

  return (
    <div>
      <div className="grid">{arr}</div>
    </div>
  )
}

export default ShowList
