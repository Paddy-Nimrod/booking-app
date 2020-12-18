import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custon-button.component';


const CollectionItem = ({ id, imageUrl, name, price })=>(
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage:`url(${ imageUrl })`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>Kshs.{ price }</span>
            </div>
            <CustomButton inverted >Add to Cart</CustomButton>
        </div>
    
)

export default CollectionItem;