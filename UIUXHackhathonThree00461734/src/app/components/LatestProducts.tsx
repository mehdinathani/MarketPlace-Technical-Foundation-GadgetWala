'use client'
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";


import { useEffect, useState } from "react";
import ProductCard from "./product_card";

interface Product {

    image: string;
    title: string;
    price: number;
    oldPrice?: string; // Optional, if not all products have an old price
    slug: string;
}

// function ProductCard({ image, title, price, oldPrice }: Product) {


//     return (
//         <div className="w-full max-w-[360px] bg-white shadow-lg rounded-lg flex flex-col items-center my-4">
//             <div className="w-[223px] h-[229px] bg-[#F6F7FB] flex items-center ">
//                 <Image src={image} alt={title} width={200} height={200} />
//             </div>
//             <div className="flex flex-row justify-between px-4 py-2">
//                 <h3 className="text-[16px] font-bold text-[#151875]">{title}</h3>
//                 <div className="flex items-center space-x-2">
//                     <p className="text-[14px] font-bold text-[#151875]">${price}</p>
//                     <p className="text-[12px] text-[#FB2448] line-through">${oldPrice}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function LatestProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const data: Product[] = await client.fetch(`
                    *[_type == "product" && isFeaturedProduct == true]{
                       "id": _id,
                        "title": name,
                        "price": price,
                        "image": image.asset->url,
                        "oldPrice": oldPrice ,
                         "slug": slug.current
                    }
                `);
                setProducts(data);
                console.log(products);
            } catch (error) {
                console.error("Failed to fetch featured products:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-16">Loading featured products...</div>;
    }
    if (products.length === 0) {
        return <div className="text-center py-16">No featured products available at the moment.</div>;
    }
    if (error) {
        return <div className="text-center py-16">Failed to load featured products. Please try again later.</div>;
    }

    return (
        <div className="w-full py-16 bg-[#F6F7FB] gap-2">
            <h1 className="font-myFont text-[42px] text-[#151875] leading-[49.22px] mb-4 text-center">
                Latest Products
            </h1>
            {/* Navigation Bar */}
            <div className="flex justify-center space-x-8 mb-8">
                {["New Arrival", "Best Seller", "Featured", "Special Offer"].map((cat, index) => (
                    <p
                        key={index}
                        className={`text-[18px] font-normal ${index === 0 ? "text-[#FB2E86]" : "text-[#151875]"
                            } cursor-pointer`}
                    >
                        {cat}
                    </p>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center">
                {products.map((product, index) => (
                    <Link key={product.slug} href={`productDetail/${product.slug}`}>

                        <ProductCard

                            key={index}
                            slug={product.slug}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
