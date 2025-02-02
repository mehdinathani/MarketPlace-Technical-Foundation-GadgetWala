'use client'
import React from "react";

const SuccessPage = () => {
    // Calculate delivery date (3 days from current date)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    // Format the date to a readable format (e.g., "January 3, 2025")
    const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md text-center">
            <h1 className="text-3xl font-bold text-green-500 mb-4">Payment Successful!</h1>
            <p className="text-lg mb-4">Thank you for shopping with us!</p>
            <p className="text-lg mb-4">Your order will be delivered by {formattedDeliveryDate}.</p>
            <button
                onClick={() => {

                    window.location.href = "/";
                }} className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold rounded-md hover:bg-[#E0227A]">
                Back to Home
            </button>
        </div>
    );
};

export default SuccessPage;
