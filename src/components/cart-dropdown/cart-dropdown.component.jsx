import React from 'react';
import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custon-button.component';

const CartDropdown = ()=>(
    <div className='cart-dropdown' >
        <div className='cart-items' />
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);


export default CartDropdown;