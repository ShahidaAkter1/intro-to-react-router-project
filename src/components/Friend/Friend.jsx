import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);

    const {email, name,id,phone} =friend;
    return (
        <div className='friend'>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;