import React from 'react'
import CartItems from './CartItems';
import cardimg from '../Components/images/img-2.jpg';
import './Cards.css';
const Cards = () => {
  return (
    <div className='cards'>
       <h2>Check out these epic designations!</h2>
       <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
               <CartItems
               src={cardimg} text='explore the hidden waterfalldeep inside the Amazon jungle' label='adventure' path='/services'
               />
               <CartItems
               src={cardimg} text='explore the hidden waterfalldeep inside the Amazon jungle' label='Luxury' path='/services'
               />
               <CartItems
               src={cardimg} text='explore the hidden waterfalldeep inside the Amazon jungle' label='adventure' path='/services'
               />
               <CartItems
               src={cardimg} text='explore the hidden waterfalldeep inside the Amazon jungle' label='adventure' path='/services'
               />
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Cards
