import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderSteps from './HeaderSteps';
import scanneer from "../../assets/images/webp/scanner.jpeg";
const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClose = () => {
        navigate(-1);
    };

    const product = location.state?.product;

    useEffect(() => {
        if (!product) {
            console.warn("OrderSummary: Product data is missing in location state.");
        } else {
            console.log("OrderSummary received product:", product);
        }
    }, [product]);

    return (
        <div className="flex flex-col h-screen">
            <HeaderSteps onClose={handleClose} text="Payments" currentStep={3} />
            <div className="py-6 px-5 shadow-login flex flex-col gap-4">
                <div className='size-[320px] mx-auto'>
                <img src={scanneer} alt="scaner" className='size-full object-cover'/>
                </div>
            </div>

            <div className="px-5 mt-6">
                <div>
                    <p className="font-inter font-normal text-sm text-rich-black mb-6">Price Details</p>
                    <div className="flex items-center justify-between">
                        <p className="font-inter font-normal text-xs opacity-70 text-rich-black">Price (1 item)</p>
                        <p className="font-inter font-normal text-xs text-rich-black">Rs: {product?.price}.00</p>
                    </div>
                    <div className="flex items-center justify-between mb-6 mt-4">
                        <p className="font-inter font-normal text-xs opacity-70 text-rich-black">Delivery Charges</p>
                        <p className="font-inter font-normal text-xs text-rich-black">Rs: {product?.price}.00</p>
                    </div>
                    <hr className="border-dashed border-rich-black opacity-70" />
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-inter font-normal text-xs opacity-70 text-rich-black">Amount Payable</p>
                        <p className="font-inter font-normal text-xs text-rich-black">Rs: {product?.price}/-</p>
                    </div>
                </div>
            </div>

            <div className="px-5 justify-end flex grow mb-10">
                <button type="submit" className="rounded-[100px] mt-auto p-2 max-h-[33px] w-full flex items-center justify-center bg-[#FFC200] font-inter font-medium text-sm text-rich-black">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Payment;
