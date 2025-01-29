'use client'

import { Bounce, ToastContainer, toast } from 'react-toastify';


interface AddToCartProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartProps) {
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "{}");

        if (cart[product.title]) {
            cart[product.title] = {
                ...cart[product.title], quantity: cart[product.title].quantity + 1,
            };
        } else {
            cart[product.title] = { ...product, quantity: 1 };
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Instead of page reload, trigger a re-render (if using state)
        // alert(`${product.title} added to cart! ✅`);
        toast(`${product.title} added to cart! ✅`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    addToCart();
                }}
                className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition"
            >
                Add to Cart
            </button>
            <ToastContainer />
        </div>

    );
}
