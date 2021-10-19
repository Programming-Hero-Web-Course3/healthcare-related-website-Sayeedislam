import React from 'react';
import { Form } from 'react-bootstrap';

const Contract = () => {
    return (
        <div className="flex container py-5 px-2">
            <div className="w-50">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a Message....</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Write a Message" />
                    </Form.Group>
                    <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-2xl">Send</button>
                </Form>
            </div>
            <div className="w-50 ml-3 px-48 mt-4 ">
                <h3>Address</h3>
                <p className="leading-5">Smart Hospital</p>
                <p className="leading-5">Daman Street</p>
                <p className="leading-5">K.K District</p>
                <p className="leading-5">Phone:+91 9159669599</p>
                <p className="leading-5">Email:smartHospital@gmail.com</p>
                <p className="leading-5">www.cardiologyCenter.com</p>
            </div>
        </div>
    );
};

export default Contract;