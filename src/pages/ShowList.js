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
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listsPerPage] = useState(8);
  
  
  

  const indexOfLastList = currentPage * listsPerPage;
  console.log(indexOfLastList);
  console.log(listsPerPage);
  const indexOfFirstList = indexOfLastList - listsPerPage;
  console.log(indexOfFirstList);
  const currentData = data.slice(indexOfFirstList, indexOfLastList);
  console.log(data);
  console.log(currentData);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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

  
  const arr = Object.keys(currentData).map((key) => { return  (
  
  <div className="grid-container"> 
    <div classname = "product-container">
          <div className="product-image">
            <img
              className="image"
              src={`http://localhost:8000/images/` + currentData[key].thumbnailImage}
              alt="image of product"
              />
          </div>

            <div className="product-title">{currentData[key].title}</div>
           <p className='product-description'>{currentData[key].description}</p>
            <p className='product-category'>{currentData[key].category}</p>
            <p className='product-brand'>{currentData[key].brandname}</p>
            <p className="product-price">{"price:" + currentData[key].price}</p>
            <p className="product-discount">{currentData[key].discount + "off"}</p>

              <button onClick={() => handleClick(currentData[key].id)} class="view-more-button">view product</button>
          </div>
  </div>  
  
  )});

  return (
    <div>
      {/* <div className="grid"> */}
        {arr}
        {/* </div> */}
      <ul className="pagination">
        {data.length > listsPerPage && (
          Array.from({ length: Math.ceil(data.length / listsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default ShowList
