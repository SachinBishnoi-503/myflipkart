import React from 'react'

const Input = (input) => {
    return (
        <input
            type={input.text}
            id={input.id}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
            className="relative w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
    )
}

export default Input