import React from 'react';
import abotImg from './../../images/about/why.jpg'

const About = () => {
    return (
        <div>
            <div>
                <h2 className="text-center mt-5  ">About Us</h2>
            </div>

            <div className="flex">
                <div className="w-50 p-5">
                    <img className="mt-5" src={abotImg} alt="" />
                </div>
                <div className="w-50 p-5">
                    <h2>Why choos Health Care with
                        <h2 className="text-red-500"> Medical Hospital</h2></h2>
                    <p className="mt-3 leading-7">Evercare Hospital Dhaka is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety. Evercare Hospital Dhaka was first accredited by JCI in 2008 and till date remains the only hospital in Bangladesh to hold this international recognized standard. Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.

                        EHD is a 425-bed multi-disciplinary super-specialty tertiary care hospital in Bangladesh, providing comprehensive health care with the latest medical, surgical and diagnostic facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art equipment, modern well researched protocols & processes.</p>
                </div>
            </div>
        </div>
    );
};

export default About;