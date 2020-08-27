import React from 'react';
import './Course/Course.css';
const Percourse = (props) => {
    const size = {
        width: "100%"
    }
    const {img,name,owner,price}=(props.course)
    return (
        <div className="course">
            <img style={size} src={img} alt=""/>
            
            <div className="course-name">
                <h3>{name}</h3>
                <p>{owner}</p>
                 <h2>${price}</h2>
                <button onClick={()=> props.click(props.course)} className="btn btn-success">Enroll Now</button>
            </div>
        </div>
    );
};

export default Percourse;