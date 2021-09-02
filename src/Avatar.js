import React from 'react';
import 'tachyons';
import Avatarlist from './Avatarlist';

import './Avatar.css';

 

const Avatar = () =>{

    const avatarlistarray=[
        {
            id:1,
            name:"shubham",
            work:"Web developer"

        },
        {
            id:2,
            name:"Raju",
            work:"Fullstack developer" 
        },
        {
            id:3,
            name:"Deep",
            work:"Frontend developer"
        },
        {
            id:4,
            name:"sandeep",
            work:"Android developer"
        }
    ]

    const av=avatarlistarray.map((avtcard,i) => {

        return <Avatarlist name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
    })

    return (
        <div className="tc">
        <h1 className='tc'>Welcome the new world</h1>
         {av}
        
        </div>
    )
}

export default Avatar;