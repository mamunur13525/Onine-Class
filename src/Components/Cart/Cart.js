import React from 'react';

const Cart = (props) => {
   
console.log(props.coursePrice)
let total = 0;
for (let i = 0; i < props.coursePrice.length; i++) {
    let perPic = props.coursePrice[i].price;
   perPic = parseFloat(perPic);
    total =  total +  parseFloat(perPic);
}

    
    return (
        <div>
            <h2 className="text-center text-dark p-3">Items Ordered</h2>
         <h4 style={{color: "red"}} className="p-3">Total Items: {props.coursePrice.length}</h4>
         <h4 style={{color: "red"}} className="p-3">Total Price:${total} </h4>
        </div>
    );
};

export default Cart;