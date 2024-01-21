import React from 'react'
import {Link} from 'react-router-dom';
const CartItems = (props) => {
  return (
    <div>
    <li className='cards-item'>
      <Link to={props.path} className='cards-item-link'>
         <figure className='class-item-pic-wrap' data-category={props.label}>
            <img src={props.src} alt='travelimg' className='cards-item-img'></img>
         </figure>
         <div className='cards-item-info'>
           <h5 className='cards-item-text'>{props.text}</h5>
        </div>
      </Link>
    </li>
    </div>
  )
}


export default CartItems
