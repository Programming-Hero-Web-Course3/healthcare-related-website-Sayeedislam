import React, { useEffect, useState } from 'react';
import GallaryIMGE from '../GallaryIMGE/GallaryIMGE';

const Gallary = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-4 gap-6">
            {
                photos.map(photo => <GallaryIMGE
                    photo={photo}></GallaryIMGE>)
            }
        </div>
    );
};

export default Gallary;