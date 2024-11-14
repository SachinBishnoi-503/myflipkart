import React, { useState } from 'react';
import { productsData } from './common/Helper';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const [productRatings, setProductRatings] = useState(
        productsData.map(product => ({
            id: product.id,
            rating: null,
            hover: null
        }))
    );

    const navigate = useNavigate();

    const handleSetRating = (productId, ratingValue) => {
        setProductRatings(prevRatings =>
            prevRatings.map(product =>
                product.id === productId ? { ...product, rating: ratingValue } : product
            )
        );
    };

    const handleSetHover = (productId, hoverValue) => {
        setProductRatings(prevRatings =>
            prevRatings.map(product =>
                product.id === productId ? { ...product, hover: hoverValue } : product
            )
        );
    };

    const handleBuyNow = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <>
            <div className='flex flex-wrap flex-row -mx-2'>
                {productsData.map((product) => {
                    const productRating = productRatings.find(pr => pr.id === product.id);
                    return (
                        <div key={product.id} className='w-1/2 px-2'>
                            <div className='p-3 rounded-xl bg-off-white shadow-login mt-4'>
                                <div className='py-[14px] w-full rounded-md bg-palatinate-blue bg-opacity-[12%] flex items-center justify-center'>
                                    <img src={product.image} alt={product.name} className='max-w-[90px] max-h-[112px]' />
                                </div>
                                <p className='pt-3 font-inter font-normal text-[10px] text-rich-black opacity-70 leading-normal'>
                                    {product.name} <br />
                                    {product.model}
                                </p>
                                <div className='pt-2 gap-1 flex items-center inter text-xs font-semibold text-rich-black'>
                                    {product.rating}
                                    <div className="flex">
                                        {[...Array(5)].map((_, starIndex) => {
                                            const ratingValue = starIndex + 1;
                                            return (
                                                <label key={starIndex}>
                                                    <input
                                                        type="radio"
                                                        name={`rating-${product.id}`}
                                                        value={ratingValue}
                                                        onClick={() => handleSetRating(product.id, ratingValue)}
                                                        className="hidden"
                                                    />
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`size-[11px] cursor-pointer transition-colors duration-200 ${ratingValue <= (productRating.hover || productRating.rating) ? "text-yellow-400" : "text-gray-400"}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        onMouseEnter={() => handleSetHover(product.id, ratingValue)}
                                                        onMouseLeave={() => handleSetHover(product.id, 0)}
                                                    >
                                                        <path d="M12 .587l3.668 7.431 8.207 1.192-5.938 5.784 1.4 8.178L12 18.897l-7.337 3.865 1.4-8.178L.125 9.21l8.207-1.192L12 .587z" />
                                                    </svg>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                                <p className='pt-2 font-inter text-palatinate-blue font-semibold text-2xl'>Rs: {product.price}/-</p>
                                <p className='font-inter font-normal text-[10px] text-rich-black opacity-70 line-through'>Rs: {product.originalPrice}/-</p>
                                <button
                                    onClick={() => handleBuyNow(product.id)}
                                    className='w-full font-inter font-medium text-sm text-rich-black p-2 rounded-[100px] bg-amber mt-3'
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
