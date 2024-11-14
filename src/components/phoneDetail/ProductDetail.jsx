import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsData } from '../common/Helper';
import NavBar from '../common/Navbar';
import apple_logo from "../../assets/images/svg/apple.svg";
import { APPLE, CAMERA, DISPLAY, FLAG, FLIPKART_SIGN, FRONT_CAMERA, HEART, PROGRESS, PROSECCOR, PUBLIC, RAM_ROM, REPLACE, RIGHT_ARROW, RUPPES_SIGN, SHARE } from '../common/Icon';
import flipkartassured from "../../assets/images/webp/flipkartassured.png";
import supercoin from "../../assets/images/webp/supercoin.png";
const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('512 GB');
    const navigate = useNavigate(); // Initialize navigate

    const handleTabClick = (storageSize) => {
        setActiveTab(storageSize);
    };

    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found.</div>;
    }

    const openBuyNow = () => {
        navigate(`/buy-now/${product.id}`); // Navigate to Buy Now page
    };

    return (
        <div className='relative'>
            <div className='max-w-[430px] mx-auto px-5'>
                <NavBar />
                <div className='mt-4 bg-rich-black bg-opacity-10 rounded-[10px] p-[34px] relative'>
                    <div className='absolute right-4 top-4 flex items-center gap-2 flex-col'>
                        <span className='size-[16px] rounded-full flex items-center justify-center bg-rich-black bg-opacity-[8%] cursor-pointer'>
                            <HEART />
                        </span>
                        <span className='size-[16px] rounded-full flex items-center justify-center bg-rich-black bg-opacity-[8%] cursor-pointer'>
                            <SHARE />
                        </span>
                    </div>
                    <img src={product.image} alt={product.name} className="max-h-[172px] mx-auto" />
                </div>
                <p className=' font-inter font-medium text-sm text-rich-black mt-4'>Storage</p>
                <div className='flex items-center gap-3 mt-3'>
                    <button
                        className={`py-1.5 px-3 rounded-[100px] leading-none font-inter font-normal text-[10px] ${activeTab === '512 GB' ? 'bg-palatinate-blue text-white' : 'bg-rich-black bg-opacity-[12%] text-rich-black text-opacity-70'
                            }`}
                        onClick={() => handleTabClick('512 GB')}
                    >
                        512 GB
                    </button>
                    <button
                        className={`py-1.5 px-3 rounded-[100px] leading-none font-inter font-normal text-[10px] ${activeTab === '256 GB' ? 'bg-palatinate-blue text-white' : 'bg-rich-black bg-opacity-[12%] text-rich-black text-opacity-70'
                            }`}
                        onClick={() => handleTabClick('256 GB')}
                    >
                        256 GB
                    </button>
                    <button
                        className={`py-1.5 px-3 rounded-[100px] leading-none font-inter font-normal text-[10px] ${activeTab === '128 GB' ? 'bg-palatinate-blue text-white' : 'bg-rich-black bg-opacity-[12%] text-rich-black text-opacity-70'
                            }`}
                        onClick={() => handleTabClick('128 GB')}
                    >
                        128 GB
                    </button>
                </div>
            </div>
            <div className='border-t-[0.5px] border-b-[0.5px] border-rich-black border-opacity-10 mt-4 py-3'>
                <div className='max-w-[430px] mx-auto px-5'>
                    <p className='font-inter font-medium text-sm text-rich-black'>{product.name}</p>
                    <img src={flipkartassured} alt="flipkartassured" className='max-w-[70px] max-h-5 mt-4' />
                    <div className='flex items-center gap-6 mt-4'>
                        <span className='text-[#21A500] font-inter font-normal text-xs'>100%</span>
                        <div className='flex items-center gap-2'>
                            <span className='line-through font-inter text-xs font-normal text-rich-black text-opacity-70'>Rs: {product.originalPrice}</span>
                            <span className='font-inter text-xs font-normal text-rich-black'>Rs: {product.price}</span></div>
                    </div>
                </div>
            </div>
            <div className='py-8 max-w-[430px] px-5 mx-auto'>
                <div className='flex items-center gap-[35px]'>
                    <img src={supercoin} alt="supercoin" className='w-24 h-10' />
                    <div className='max-w-[226px] flex flex-col gap-3'>
                        <p className='font-inter font-normal text-xs text-rich-black opacity-70'>Credit Upto Rs. 1lakh*
                            Shop Now & Pay Through EMI’s Easily</p>
                        <a href="/" className='font-inter text-palatinate-blue font-medium text-sm flex items-center gap-1'>Activate Now
                            <span>
                                <RIGHT_ARROW />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-t-[0.5px] border-b-[0.5px] border-rich-black py-8 border-opacity-10'>
                <div className='max-w-[340px] mx-auto flex items-center gap-[65px]'>
                    <div className='flex flex-col items-center gap-2 max-w-[70px]'>
                        <REPLACE />
                        <span className='font-inter font-normal text-xs text-rich-black opacity-70 text-center'>
                            7 Days Replacement
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-2 max-w-[70px]'>
                        <RUPPES_SIGN />
                        <span className='font-inter font-normal text-xs text-rich-black opacity-70 text-center'>
                            No Cash On Delivery
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-2 max-w-[70px]'>
                        <FLIPKART_SIGN />
                        <span className='font-inter font-normal text-xs text-rich-black opacity-70 text-center'>
                            Plus
                            (F Assured)
                        </span>
                    </div>
                </div>
            </div>
            <div className='py-8 max-w-[430px] px-5 mx-auto'>
                <p className='font-inter font-semibold text-base text-rich-black pb-6'>Highlights</p>
                <div className='flex items-center gap-4'>
                    <span>
                        <RAM_ROM />
                    </span>
                    <div className='font-inter text-[10px] text-rich-black opacity-70 flex flex-col gap-0.5'>
                        <span className='font-normal'>RAM | ROM</span>
                        <span className='font-medium'>{activeTab}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-6'>
                    <span><PROSECCOR /></span>
                    <div className='font-inter text-[10px] text-rich-black opacity-70 flex flex-col gap-0.5'>
                        <span className='font-normal'>Processor</span>
                        <span className='font-medium'>{product.processor}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-6'>
                    <span><CAMERA /></span>
                    <div className='font-inter text-[10px] text-rich-black opacity-70 flex flex-col gap-0.5'>
                        <span className='font-normal'>Rear Camera</span>
                        <span className='font-medium'>{product.camera}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-6'>
                    <span><FRONT_CAMERA /></span>
                    <div className='font-inter text-[10px] text-rich-black opacity-70 flex flex-col gap-0.5'>
                        <span className='font-normal'>Front Camera</span>
                        <span className='font-medium'>12 MP</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-6'>
                    <span><DISPLAY /></span>
                    <div className='font-inter text-[10px] text-rich-black opacity-70 flex flex-col gap-0.5'>
                        <span className='font-normal'>Display</span>
                        <span className='font-medium'>{product.display}</span>
                    </div>
                </div>
            </div>
            <div className='border-t-[0.5px] border-b-[0.5px] border-rich-black border-opacity-10'>
                <div className='py-8'>
                    <p className='font-inter font-semibold text-base text-rich-black pb-4 max-w-[430px] px-5 mx-auto'>Other Details</p>
                    <div className='max-w-[430px] px-5 mx-auto w-full bg-[#2A55E51A]'>
                        <div className='flex items-center gap-[42px] py-2 font-inter font-normal text-sm text-rich-black'>
                            <span className='opacity-70'>Network Type</span>
                            <span>5G, 4G VoLTE, 4G LTE, UMTS, GSM</span>
                        </div>
                    </div>
                    <div className='max-w-[430px] px-5 mx-auto w-full'>
                        <div className='flex items-center gap-[73px] py-2 font-inter font-normal text-sm text-rich-black'>
                            <span className='opacity-70'>SIM Type</span>
                            <span>Dual Sim (Nano + Esim)</span>
                        </div>
                    </div>
                    <div className='max-w-[430px] px-5 mx-auto w-full bg-[#2A55E51A]'>
                        <div className='flex items-center gap-[54px] py-2 font-inter font-normal text-sm text-rich-black'>
                            <span className='opacity-70'>Expandable <br /> Storage</span>
                            <span>No</span>
                        </div>
                    </div>
                    <div className='max-w-[430px] px-5 mx-auto w-full '>
                        <div className='flex items-center gap-[54px] py-2 font-inter font-normal text-sm text-rich-black'>
                            <span className='opacity-70'>Audio Jack</span>
                            <span>No</span>
                        </div>
                    </div>
                    <div className='max-w-[430px] px-5 mx-auto w-full bg-[#2A55E51A]'>
                        <div className='flex items-center gap-[66px] py-2 font-inter font-normal text-sm text-rich-black'>
                            <span className='opacity-70'>Quick <br /> Charging</span>
                            <span>No</span>
                        </div>
                    </div>
                    <div className='max-w-[430px] px-5 mx-auto w-full'>
                        <div className='flex items-center gap-[54px] py-2 font-inter font-normal text-sm text-rich-black'>
                            <span className='opacity-70'>In The Box</span>
                            <span className='max-w-[197px]'>Handset, Type-C to {product.cable}, Documentation</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-8 max-w-[430px] px-5 mx-auto'>
                <p className='font-inter font-semibold text-base text-rich-black pb-4'>Other Details</p>
                <div className='flex gap-[54px]'>
                    <p className='font-inter font-normal text-sm text-rich-black opacity-70'>Warranty Summary</p>
                    <p className='font-inter font-normal text-sm text-rich-black max-w-[197px]'>1 Year Warranty For Phone & 6 Months Warranty For In Box Accessories</p>
                </div>
            </div>
            <div className='border-t-[0.5px] border-rich-black border-opacity-10'>
                <div className='max-w-[430px] px-5 mx-auto w-full py-8'>
                    <div className='flex items-center justify-between'>
                        <p className='font-inter font-semibold text-base text-rich-black'>Other Details</p>
                        <span> <RIGHT_ARROW /></span>
                    </div>
                    <div className='flex items-center gap-4 pt-4'>
                        <img src={apple_logo} alt="appple logo" />
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-inter font-normal text-[10px] text-rich-black opacity-70 leading-normal'>
                                About The Brand
                            </p>
                            <p className='font-inter font-medium text-sm text-rich-black leading-normal'>
                                Apple
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 pt-4'>
                        <span><PROGRESS /></span>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-inter font-semibold text-[10px] text-rich-black leading-normal'>
                                Popular In Handsets
                            </p>
                            <p className='font-inter font-medium text-[10px] text-rich-black opacity-70 leading-normal'>
                                Based On Recent Orders On Flipkart
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 pt-4'>
                        <span><PUBLIC /></span>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-inter font-semibold text-[10px] text-rich-black leading-normal'>
                                Loved By Customers
                            </p>
                            <p className='font-inter font-medium text-[10px] text-rich-black opacity-70 leading-normal'>
                                Based On Customers Ratings
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 pt-4'>
                        <span><FLAG /></span>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-inter font-semibold text-[10px] text-rich-black leading-normal'>
                                8+ Years On Flipkart
                            </p>
                            <p className='font-inter font-medium text-[10px] text-rich-black opacity-70 leading-normal'>
                                Trusted Brand On Flipkart
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center sticky bottom-0 left-0 bg-white'>
                <button className='bg-rich-black bg-opacity-10 py-3 w-1/2 flex items-center justify-center font-inter font-normal text-sm text-rich-black'>
                    Add To Cart
                </button>
                <button
                    className='bg-[#FFC200] py-3 w-1/2 flex items-center justify-center font-inter font-normal text-sm text-rich-black'
                    onClick={openBuyNow} // Now navigates to Buy Now page
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
