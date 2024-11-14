import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import flipkartassured from "../../assets/images/webp/flipkartassured.png";
import HeaderSteps from './HeaderSteps';

const OrderSummary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const handleClose = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleContinue = () => {
        // Navigate to Payment and pass product data
        navigate('/payment', { state: { product } });
    };

    useEffect(() => {
        if (!product) {
            console.warn("OrderSummary: Product data is missing in location state.");
        }
    }, [product]);

    const discount = product && product.originalPrice && product.price
        ? product.originalPrice - product.price
        : 0;

    return (
        <div className='flex flex-col h-screen'>
            <HeaderSteps onClose={handleClose} text="Order Summary" currentStep={2} />
            <div className='shadow-login py-6 px-[63px]'>
                <div className='max-w-[170px] mx-auto'>
                    {product ? (
                        <>
                            <p className='font-inter text-rich-black text-sm font-normal'>{product.name}</p>
                            <img src={flipkartassured} alt="flipkart" className='w-[74px] h-5 mt-4' />
                            <div className='flex items-center gap-3 mt-12'>
                                <p className='font-inter font-normal text-xs text-[#21A500]'>100%</p>
                                <p className='font-inter font-normal text-xs text-rich-black opacity-70 line-through'>Rs: {product.originalPrice}</p>
                                <p className='font-inter font-normal text-xs text-rich-black opacity-70'>Rs: {product.price}</p>
                            </div>
                        </>
                    ) : (
                        <p className='font-inter text-red-500 text-sm font-normal'>Product not found.</p>
                    )}
                </div>
            </div>
            {product && (
                <div className='mt-6 px-5'>
                    <p className='font-inter font-normal text-sm text-rich-black mb-6'>Price Details</p>
                    <div className='flex items-center justify-between'>
                        <p className='font-inter font-normal text-xs opacity-70 text-rich-black'>Price (1 item)</p>
                        <p className='font-inter font-normal text-xs text-rich-black'>Rs: {product.originalPrice}.00</p>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='font-inter font-normal text-xs opacity-70 text-rich-black'>Discount</p>
                        <p className='font-inter font-normal text-xs text-rich-black'>Rs: {discount}.00</p>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='font-inter font-normal text-xs opacity-70 text-rich-black'>Delivery Charges</p>
                        <p className='font-inter font-normal text-xs text-rich-black'>Rs: {product.price}.00</p>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='font-inter font-normal text-xs opacity-70 text-rich-black'>Payment</p>
                        <p className='font-inter font-normal text-xs text-rich-black'>Cash On Delivery</p>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='font-inter font-normal text-xs opacity-70 text-rich-black'>GST</p>
                        <p className='font-inter font-normal text-xs text-rich-black'>12%</p>
                    </div>
                    <div className='flex items-center justify-between mt-8'>
                        <p className='font-inter font-normal text-xs opacity-70 text-rich-black'>Total Amount:</p>
                        <p className='font-inter font-normal text-xs text-rich-black'>Rs: 199.00</p>
                    </div>
                    <p className='text-[#21A500] font-inter font-normal text-xs mt-4'>You Will Save- {discount}.00 On This Order.</p>
                </div>
            )}
            <div className='px-5 justify-end flex grow  mb-10'>
                <button
                    type="submit"
                    className='rounded-[100px] mt-auto p-2 max-h-[33px] w-full flex items-center justify-center bg-[#FFC200] font-inter font-medium text-sm text-rich-black'
                    onClick={handleContinue}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;
