/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

export default function CustomerInfo({ cart }: { cart: any }) {
    // State to store form data
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");

        try {
            // ✅ Ensure cart is valid
            if (!cart || typeof cart !== "object" || Object.keys(cart).length === 0) {
                throw new Error("Cart is empty or invalid.");
            }

            // ✅ Step 1: Calculate the total price
            const totalPrice = Object.values(cart).reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

            // ✅ Step 2: Prepare the title for the order
            const title = `Order for ${name}`; // This could also be customized as per the business logic

            // ✅ Step 3: Call Stripe Payment API
            const paymentResponse = await fetch('/api/payment', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,       // Send the order title
                    totalPrice,  // Send the total price
                }),
            });

            const paymentData = await paymentResponse.json();
            console.log("Payment response:", paymentData);

            if (paymentData.url) {
                // Redirect to Stripe checkout session
                window.location.href = paymentData.url;
            } else {
                throw new Error("Invalid payment URL. Full response: " + JSON.stringify(paymentData));
            }

            setSuccessMessage("Order created successfully!");
        } catch (error: any) {
            console.error("Error in checkout process:", error);
            setSuccessMessage("Failed to create order. " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
            {successMessage && (
                <div className={`text-center mb-4 ${successMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border rounded-md mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-2 border rounded-md mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Shipping Address
                    </label>
                    <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full px-4 py-2 border rounded-md mt-1"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded-md mt-1" />
                </div>
                <button type="submit" disabled={loading} className={`w-full py-2 px-4 bg-pink-500 text-white rounded-md mt-4 ${loading ? "opacity-50" : ""}`}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
