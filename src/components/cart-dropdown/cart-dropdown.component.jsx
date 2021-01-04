import React from 'react';
import './cart-dropdown.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch })=>(
    <div className='cart-dropdown' >
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem=> (<CartItem key={cartItem.id} item={cartItem}/>)) 
                : 
                <span className='empty-message'>no items in cart</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }} >CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});
export default withRouter(connect(mapStateToProps) (CartDropdown));