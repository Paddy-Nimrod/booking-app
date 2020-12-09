import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections : [{
                    title:'hats',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:1,
                    linkUrl: 'hats'
                },
                {
                    title:'Jackets',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:2,
                    linkUrl: ''
                },
                {
                    title:'sneakers',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:3,
                    linkUrl: ''
                },
                {
                    title:'womens',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    size:'large',
                    id:4,
                    linkUrl: ''
                },
                {
                    title:'mens',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    size:'large',
                    id:5,
                    linkUrl: ''
                }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...OtherSectionProps}) =>(
                        <MenuItem key={id} {...OtherSectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default Directory;