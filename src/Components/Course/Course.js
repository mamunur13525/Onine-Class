import React from 'react';
import fakeData from '../../fakeData';
import './Course.css';

import Percourse from '../Percourse';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Course = () => {
    
const courseData = fakeData;
    const [price, setPrice] = useState([]);
            
   const handleClick = (course) => {
       const newPrice = [...price, course];
       setPrice(newPrice)
   }
    return (
        <div className="d-flex course-parent">
           <div className="course-box d-flex flex-wrap justify-content-around">
            
                {
                courseData.map(course => <Percourse course={course} click={handleClick}></Percourse>)
                }
           </div>
           <div className="course-cart">
               <Cart coursePrice={price} ></Cart>
           </div>
        </div>
    );
};

export default Course;