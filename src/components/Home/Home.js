import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';
import HomeServices from '../HomeServices/HomeServices';
import FirstSlider from './../../images/slider/slider-1.jpg';
import SecendSlider from './../../images/slider/slider-2.jpg';
import ThirdSlider from './../../images/slider/slider-3.jpg';



const Home = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={FirstSlider}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-gray-800 font-bold">Meet our psychiatrists</h3>
                            <p className="text-gray-800 text-base text-lg font-medium  ">Our psychiatrists are highly skilled to meet your unique needs.</p>
                            <button className="bg-green-300 py-2 px-4 rounded-md text-gray-800 text-2xl">View all Tharapist</button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={SecendSlider}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-gray-800 font-bold">It's time for better help.</h3>
                            <p className="text-gray-800   text-base text-lg font-medium">We can help you conquer a wide range of psychological and emotional problems.</p>
                            <button className="bg-green-300 text-gray-800 py-2 px-4 rounded-md text-2xl">Meet Psychiatrists</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ThirdSlider}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-gray-800 font-bold">Feeling stress or anxious?</h3>
                            <p className="text-gray-800 text-base text-lg font-medium">We can help you conquer a wide range of psychological and emotional problems.</p>
                            <button className="bg-green-300 text-gray-800 py-2 px-4 rounded-md text-2xl">Schedule A Visit</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div>
                <h2 className="text-center mx-8 my-2">Our Services</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-4 gap-6">
                    {
                        image.map(img => <HomeServices
                            img={img}></HomeServices>)
                    }
                </div>
            </div>
            <div>
                <Doctors></Doctors>
            </div>
        </div>
    );
};

export default Home;