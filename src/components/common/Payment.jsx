import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import paytm from "../../assets/images/svg/paytm.svg";
import phonepe from "../../assets/images/svg/phonepe.svg";
import googlepay from "../../assets/images/svg/googlepay.svg";
import HeaderSteps from './HeaderSteps';

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState('');

    const handleSelect = (option) => {
        setSelected(option);
    };
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

                {/* PhonePay */}
                <div
                    className={`flex items-center p-[6px_10px_6px_14px] border rounded-lg cursor-pointer ${selected === 'phonepay' ? 'border-indigo-500' : 'border-gray-300'}`}
                    onClick={() => handleSelect('phonepay')}
                >
                    <img
                        src={phonepe}
                        alt="Phone Pay"
                        className="w-6 h-6"
                    />
                    <span className="ml-5 text-xs opacity-70 text-rich-black font-inter font-medium">Phone Pay</span>
                    <input
                        type="radio"
                        name="payment"
                        className="ml-auto form-radio h-5 w-5 text-indigo-600"
                        checked={selected === 'phonepay'}
                        onChange={() => handleSelect('phonepay')}
                    />
                </div>

                {/* Paytm */}
                <div
                    className={`flex items-center p-2.5 border rounded-lg cursor-pointer ${selected === 'paytm' ? 'border-indigo-500' : 'border-gray-300'}`}
                    onClick={() => handleSelect('paytm')}
                >
                    <img
                        src={paytm}
                        alt="Paytm"
                        className="w-[30px] h-[30px]"
                    />
                    <span className="ml-[17px] text-xs opacity-70 text-rich-black font-inter font-medium">Paytm</span>
                    <input
                        type="radio"
                        name="payment"
                        className="ml-auto form-radio h-5 w-5 text-indigo-600"
                        checked={selected === 'paytm'}
                        onChange={() => handleSelect('paytm')}
                    />
                </div>

                {/* Google Pay */}
                <div
                    className={`flex items-center p-[9px_10px] border rounded-lg cursor-pointer ${selected === 'gpay' ? 'border-indigo-500' : 'border-gray-300'}`}
                    onClick={() => handleSelect('gpay')}
                >
                    <img
                        src={googlepay}
                        alt="Google Pay"
                        className="w-5 h-5"
                    />
                    <span className="ml-[22px] text-xs opacity-70 text-rich-black font-inter font-medium">Google Pay</span>
                    <input
                        type="radio"
                        name="payment"
                        className="ml-auto form-radio h-5 w-5 text-indigo-600"
                        checked={selected === 'gpay'}
                        onChange={() => handleSelect('gpay')}
                    />
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
