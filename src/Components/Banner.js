import React from 'react';

const Banner = ({ image, ID = false }) => {
    return (
        <img src={image} alt='banner-img' className='banner' id={ID ? ID : null}/>
    )
}

export default Banner;