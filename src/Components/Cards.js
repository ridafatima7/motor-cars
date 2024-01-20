import React from 'react'
import CartItems from './CartItems'
import './Cards.css';
const Cards = () => {
  return (
    <div className='cards'>
       <h1>Check out these epic designations!</h1>
       <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
               <CartItems
               src='images/img-9.jpg' text='explore the hidden waterfalldeep inside the Amazon jungle' label='adventure' path='/services'
               />
               <CartItems
               src='images/img-2.jpg' text='explore the hidden waterfalldeep inside the Amazon jungle' label='Luxury' path='/services'
               />
               <CartItems
               src='images/img-3.jpg' text='explore the hidden waterfalldeep inside the Amazon jungle' label='adventure' path='/services'
               />
               <CartItems
               src='images/img-4.jpg' text='explore the hidden waterfalldeep inside the Amazon jungle' label='adventure' path='/services'
               />
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Cards
