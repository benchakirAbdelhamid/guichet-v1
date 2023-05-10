import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';


const Panier = () => {
    const state = useSelector((state) => state.cart);

    useEffect(()=>{
        console.log(state.cart)
    })
    return (
        <div>
            <h1> total quantity event :  <span className="badge text-bg-danger">{state.totalQuantityEvent}</span></h1>
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col">img event</th>
      <th scope="col">Id event</th>
      <th scope="col">category</th>
      <th scope="col">quantity ticket</th>
      <th scope="col">total Price</th>
      <th scope="col">quantity ticket</th>
    </tr>
  </thead>
  <tbody>
    {
    state.cart.length > 0
    ? state.cart.map((item)=>{
        return(
            <tr> 
                <td><img className="rounded-circle" style={{'width':'100px'}} src={item.information_event.imageURL} alt=''/></td>
                <td>{item.id}</td>
                <td>{item.information_event.category}</td>
                <td>{item.quantity_ticket}</td>
                <td>{item.totalPrice}</td>
                <td>{item.quantity_ticket}</td>
            </tr>
        )
    })
     : ''
     }
  </tbody>
</table>
            
        </div>
    );
}

export default Panier;
