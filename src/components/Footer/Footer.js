import React from 'react';

const Footer = () => {
    return (
        <div className="bg-green-200 mt-4">
            <div className="container flex pt-4 ">
                <div className="w-4/12">
                    <h3 className="mx-7 mb-2">Our Services</h3>
                    <ul>
                        <li style={{ listStyleType: "square" }}>Emergency Services</li>
                        <li style={{ listStyleType: "square" }}>Outdoor Patient Service</li>
                        <li style={{ listStyleType: "square" }}>Indoor Patient Service
                        </li>
                    </ul>
                </div>
                <div className="w-4/12">
                    <h3 className="mx-7 mb-2">About Us</h3>
                    <ul>
                        <li style={{ listStyleType: "square" }}>Founder of BADAS</li>
                        <li style={{ listStyleType: "square" }}>Vision and Mission</li>
                        <li style={{ listStyleType: "square" }}>Hospital Director's Office</li>
                    </ul>
                </div>
                <div className="w-4/12">
                    <h3 className="mx-7 mb-2">Others</h3>
                    <ul>
                        <li style={{ listStyleType: "square" }}>Tender</li>
                        <li style={{ listStyleType: "square" }}>Gallary</li>
                        <li style={{ listStyleType: "square" }}>Contract us</li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 bg-green-300 p-3">
                <p className="text-center my-2 text-lg">© Copyright 2018 | All rights reserved. Evercare Hospital Dhaka.</p>
            </div>
        </div>
    );
};

export default Footer;