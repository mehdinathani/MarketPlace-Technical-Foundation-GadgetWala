'use client'

import { client } from "@/sanity/lib/client"
import Image from "next/image";
import heartIcon from "@/app/assets/heart_icon.png";
import fbIcon from "@/app/assets/fb_icon.png";
import instaIcon from "@/app/assets/insta_icon.png";
import twitterIcon from "@/app/assets/x_icon.png";
import StarRatingComponent from "./start_rating";
import AddToCartButton from "@/app/components/add_to_cart_button";

interface Props {
    params: { slug: string }
}

interface Product {
    title: string;
    price: number;
    discountedPrice?: number;
    image: string;
    slug: string;
    description: string;
    rating: number;
    ratingCount: number;
    isFeaturedProduct?: boolean;
    isTrendingProduct?: boolean;
    isLatestProduct?: boolean;
    category: string;
}

export default async function ProductDetail({ params }: Props) {
    // Fetch only the product with the matching slug
    const product: Product | null = await client.fetch(
        `
        *[_type == "product" && slug.current == $slug][0] {
            "title": name,
            "price": price,
            "image": image.asset->url,
            "rating": starRating,
            "ratingCount": ratingCount,
            "slug": slug.current,
            "description": description,
            "isFeaturedProduct": isFeaturedProduct,
            "category": category,
            "isTrendingProduct": isTrendingProduct,
            "isLatestProduct": isLatestProduct
        }`,
        { slug: params.slug } // Passing slug as a parameter
    );

    if (!product) {
        return (
            <div className="text-center py-16">
                <h2 className="text-2xl font-bold">Product Not Found</h2>
                <p className="text-gray-600">The product you are looking for does not exist.</p>
            </div>
        );
    }

    // const addToCart = () => {
    //     const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    //     if (cart[product.title]) {
    //         cart[product.title] = {
    //             ...cart[product.title], quantity: cart[product.title].quantity + 1,
    //         };
    //     } else {
    //         cart[product.title] = { ...product, quantity: 1 }
    //     }
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     window.location.reload();
    // };

    const socialIcons = [fbIcon, instaIcon, twitterIcon];

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#F6F5FF] w-full h-[286px] flex flex-col items-start justify-center py-10 pl-[100px]">
                <h1 className="text-4xl text-black font-bold mb-2">Product Details</h1>
                <p className="text-sm text-black font-bold">
                    Home - Pages - <span className="text-pink-500">Product Details</span>
                </p>
            </div>

            {/* Product Detail */}
            <div className="flex flex-col md:flex-row items-center px-[200px] text-[#0D134E] gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1 className="text-[#0D134E] text-4xl leading-10">{product.title}</h1>
                    <div className="flex flex-row my-4">
                        <StarRatingComponent rating={product.rating} />
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <p className="text-sm text-gray-500 font-bold">${product.price}</p>
                        {product.discountedPrice && (
                            <p className="text-xs text-pink-500 line-through">${product.discountedPrice}</p>
                        )}
                    </div>

                    <p className="mb-4">{product.description}</p>

                    <div className="flex gap-4 my-4">
                        <AddToCartButton product={product} />
                        {/* <button
                            onClick={addToCart}
                            className="bg-pink-500 text-white py-2 px-6 rounded"
                        >
                            Add to Cart
                        </button> */}
                        <Image src={heartIcon} alt="heart Icon" width={24} height={24} />
                    </div>

                    <div className="mt-4">
                        <p className="font-bold">Categories:</p>
                        <p className="text-sm text-gray-600">{product.category}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold">Tags:</p>
                        <p className="text-sm text-gray-600">
                            {product.isFeaturedProduct ? "Featured " : ""}
                            {product.isLatestProduct ? "Latest " : ""}
                            {product.isTrendingProduct ? "Trending" : ""}
                        </p>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <p className="font-bold">Share:</p>
                        <div className="flex gap-4">
                            {socialIcons.map((icon, index) => (
                                <Image key={index} src={icon} width={24} height={24} alt="social icon" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
