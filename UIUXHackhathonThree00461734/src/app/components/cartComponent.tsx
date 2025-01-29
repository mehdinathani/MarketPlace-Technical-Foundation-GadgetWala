"use client";

import { useState, useEffect } from "react";
import CustomerInfo from "./customer_info";



export default function CartComponent() {
    const [cart, setCart] = useState<Record<string, CartItem>>({});
    const [showForm, setShowForm] = useState(false); // State to control form visibility


    useEffect(() => {
        // Get the cart data from local storage on component mount
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const removeFromCart = (slug: string) => {
        const updatedCart = { ...cart };
        delete updatedCart[slug];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const updateQuantity = (slug: string, quantity: number) => {
        const updatedCart = { ...cart };
        if (updatedCart[slug]) {
            updatedCart[slug].quantity = quantity;
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return Object.values(cart).reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const proceedToCheck = () => {
        setShowForm(true);
    }

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
            {Object.keys(cart).length === 0 ? (
                <div className="flex flex-col items-center gap-8">

                    <p className="text-center">Your cart is empty</p>
                    <p>Go to Shop</p>
                    <button
                        onClick={() => {
                            window.location.href = "/products";
                        }} className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold rounded-md hover:bg-[#E0227A]">
                        Shop Now
                    </button>
                </div>
            ) : (
                <div>
                    <div className="space-y-4">
                        {Object.values(cart).map((item) => (
                            <div key={item.title} className="flex items-center justify-between border-b py-4">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image || "/default-product-image.png"}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-500">${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(item.title, Math.max(1, parseInt(e.target.value)))
                                        }
                                        className="w-16 p-2 border rounded"
                                    />
                                    <button
                                        onClick={() => removeFromCart(item.title)}
                                        className="text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <p className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
                        <button onClick={proceedToCheck} className="bg-pink-500 text-white py-2 px-6 rounded">Proceed to Checkout</button>
                    </div>
                </div>
            )}

            {showForm && (
                <div>
                    <CustomerInfo cart={cart} />

                </div>

            )
            }
        </div>
    );
}
