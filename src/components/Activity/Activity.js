import React from 'react';
import './Activity.css'

const Avtivity = ({ activity }) => {
    const { title, img } = activity;
    return (
        <div className='activity'>
            <h4>{title}</h4>
            <img src={img} alt="" />

        </div>
    );
};

export default Avtivity;