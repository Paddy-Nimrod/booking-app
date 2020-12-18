import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import './header.style.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


const Header = ({ currentUser, hidden })=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> :
                <Link to='/signin' className='option'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : 
            <CartDropdown />
        }
        
    </div>
);

const mapStateToProps = ({user : { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});


export default connect(mapStateToProps)(Header);