import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from './Input';
import { productsData } from './Helper';
import HeaderSteps from './HeaderSteps';

const BuyNowForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData.find(p => p.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        pincode: '',
        city: '',
        houseNumber: '',
        roadName: ''
    });

    const [errors, setErrors] = useState({});
    const regexPatterns = {
        name: /^[a-zA-Z\s]{3,30}$/,
        mobileNumber: /^[6-9]\d{9}$/,
        pincode: /^\d{6}$/
    };

    if (!product) {
        return <div className="max-w-[430px] mx-auto p-5">Product not found.</div>;
    }

    const handleClose = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleInputChange = async (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Automatically fetch city for valid pincode
        if (id === 'pincode' && regexPatterns.pincode.test(value)) {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
                const data = await response.json();
                if (data[0].Status === "Success") {
                    const city = data[0].PostOffice[0].Name; // Assuming first post office's name as city
                    setFormData(prevData => ({ ...prevData, city }));
                } else {
                    setFormData(prevData => ({ ...prevData, city: '' }));
                }
            } catch (error) {
                console.error("Error fetching city data:", error);
            }
        } else if (id === 'pincode') {
            setFormData(prevData => ({ ...prevData, city: '' }));
        }
    };

    const validateForm = () => {
        let formErrors = {};
        Object.keys(formData).forEach((field) => {
            // Only validate fields that have a defined regex pattern
            if (regexPatterns[field] && !regexPatterns[field].test(formData[field])) {
                formErrors[field] = `Invalid ${field}`;
            }
        });
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            navigate('/OrderSummary', { state: { product } });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto h-screen flex flex-col">
            <HeaderSteps onClose={handleClose} text="Add delivery address" currentStep={1} />
            <div className='px-5 flex flex-col gap-5'>
                <div className='relative'>
                    <Input
                        text="text"
                        placeholder="Full Name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p className="text-red-500 text-xs absolute -bottom-3.5">{errors.name}</p>}
                </div>
                <div className='relative'>
                    <Input
                        text="number"
                        placeholder="Mobile Number"
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                    />
                    {errors.mobileNumber && <p className="text-red-500 text-xs absolute -bottom-3.5">{errors.mobileNumber}</p>}
                </div>
                <div className='relative'>
                    <Input
                        text="number"
                        placeholder="Pincode"
                        id="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                    />
                    {errors.pincode && <p className="text-red-500 text-xs absolute -bottom-3.5">{errors.pincode}</p>}
                </div>
                <Input
                    text="text"
                    placeholder="City"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                />
                {errors.city && <p className="text-red-500 text-xs absolute -bottom-3.5">{errors.city}</p>}

                <Input
                    text="text"
                    placeholder="House Number, Building Name"
                    id="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleInputChange}
                />
                {errors.houseNumber && <p className="text-red-500 text-xs absolute -bottom-3.5">{errors.houseNumber}</p>}

                <Input
                    text="text"
                    placeholder="Road Name, Area, Colony"
                    id="roadName"
                    value={formData.roadName}
                    onChange={handleInputChange}
                />
                {errors.roadName && <p className="text-red-500 text-xs absolute -bottom-3.5">{errors.roadName}</p>}
            </div>
            <div className='px-5 justify-end items-end flex grow mb-10'>
                <button type="submit" className='rounded-[100px] max-h-[33px] p-2 w-full flex items-center justify-center bg-[#FFC200] font-inter font-medium text-sm text-rich-black'>
                    Save Address
                </button>
            </div>
        </form>
    );
};

export default BuyNowForm; 
