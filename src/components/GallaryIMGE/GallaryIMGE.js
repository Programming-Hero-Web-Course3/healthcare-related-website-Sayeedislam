
import React from 'react';

const GallaryIMGE = (props) => {
    const { img } = props.photo;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default GallaryIMGE;