import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from './Input';
import { productsData } from './Helper';
import HeaderSteps from './HeaderSteps';
import emailjs from 'emailjs-com';

const BuyNowForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData.find((p) => p.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        pincode: '',
        city: '',
        state: '',
        houseName: '',
        roadName: '',
    });

    const [errors, setErrors] = useState({});
    const [isEmailSent, setIsEmailSent] = useState(false);

    const regexPatterns = {
        name: /^[a-zA-Z\s]{3,30}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        mobileNumber: /^[6-9]\d{9}$/,
        pincode: /^\d{6}$/,
    };

    const handleInputChange = async (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (id === 'pincode' && regexPatterns.pincode.test(value)) {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
                const data = await response.json();
                if (data[0].Status === 'Success') {
                    const city = data[0].PostOffice[0].Name;
                    const state = data[0].PostOffice[0].State;
                    setFormData((prevData) => ({ ...prevData, city, state }));
                } else {
                    setFormData((prevData) => ({ ...prevData, city: '', state: '' }));
                }
            } catch (error) {
                console.error('Error fetching city and state:', error);
            }
        }
    };

    const validateForm = () => {
        let formErrors = {};
        Object.keys(formData).forEach((field) => {
            if (regexPatterns[field] && !regexPatterns[field].test(formData[field])) {
                formErrors[field] = `Invalid ${field}`;
            }
        });
        return formErrors;
    };

    const handleEmailSend = async () => {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            mobileNumber: formData.mobileNumber,
            pincode: formData.pincode,
            city: formData.city,
            state: formData.state,
            houseName: formData.houseName, // Ensure this is here
            roadName: formData.roadName,
            product: product?.name || 'Unknown Product',
        };
    
        try {
            console.log('Sending email with templateParams:', templateParams); // Log data
            const response = await emailjs.send(
                'service_x0y0cfd', // Replace with your EmailJS Service ID
                'template_slzkcrz', // Replace with your EmailJS Template ID
                templateParams,
                'v-jUX7nKvu5Rzr4LI' // Replace with your EmailJS Public Key
            );
            console.log('Email successfully sent!', response.status, response.text);
            setIsEmailSent(true);
        } catch (error) {
            console.error('Error sending email:', error);
            alert(`Failed to send email. Error: ${error.text || 'Unknown error'}`);
            throw new Error('Failed to send email');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            try {
                await handleEmailSend();
                navigate('/OrderSummary', { state: { product } });
            } catch (error) {
                alert('Failed to send email. Please try again.');
            }
        } else {
            setErrors(validationErrors);
        }
    };

    if (!product) {
        return <div className="max-w-[430px] mx-auto p-5">Product not found.</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto h-screen flex flex-col">
            <HeaderSteps onClose={() => navigate(-1)} text="Add delivery address" currentStep={1} />
            <div className="px-5 flex flex-col gap-5">
                <Input
                    text="text"
                    placeholder="Full Name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                <Input
                    text="email"
                    placeholder="Email Address"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <Input
                    text="number"
                    placeholder="Mobile Number"
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                />
                {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}

                <Input
                    text="number"
                    placeholder="Pincode"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                />
                {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}

                <div className="flex items-center gap-3">
                    <Input
                        text="text"
                        placeholder="City"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled
                    />
                    <Input
                        text="text"
                        placeholder="State"
                        id="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>

                <Input
                    text="text"
                    placeholder="House Number, Building Name"
                    id="houseName"
                    value={formData.houseName}
                    onChange={handleInputChange}
                />

                <Input
                    text="text"
                    placeholder="Road Name, Area, Colony"
                    id="roadName"
                    value={formData.roadName}
                    onChange={handleInputChange}
                />
            </div>

            <div className="px-5 flex-grow flex justify-end items-end mb-10">
                <button
                    type="submit"
                    className="rounded-[100px] max-h-[33px] p-2 w-full flex items-center justify-center bg-[#FFC200] font-medium text-sm text-rich-black"
                >
                    Save Address
                </button>
            </div>

            {isEmailSent && <p className="text-green-500 text-center mt-4">Email sent successfully!</p>}
        </form>
    );
};

export default BuyNowForm;
