'use client'

import { useEffect, useState } from "react";
import ProductCard from "./product_card";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {

    image: string;
    title: string;
    price: number;
    oldPrice?: string; // Optional, if not all products have an old price
    slug: string;
}

export default function FeaturedProducts() {

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
        <div className="w-full py-16  bg-[#F6F7FB] px-[378px]">
            <div className="text-left mb-8 mx-8">
                <h2 className="text-4xl text-center font-extrabold text-[#1A0B5B]">Featured Products</h2>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-[16px]">
                {products.map((product, index) => (
                    <Link key={product.slug} href={`productDetail/${product.slug}`}>
                        <ProductCard key={index} {...product} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
