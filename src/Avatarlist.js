import React from 'react';

const Avatarlist = (props) => {

    return (
        <div className="avastyle ma4 pa4 bg-light-purple dib tc"> 
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="ava" />
        <h1 className="">{props.name}</h1>
        <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;