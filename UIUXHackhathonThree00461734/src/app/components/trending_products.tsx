'use client'

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


interface Product {

    image: string;
    title: string;
    price: string;
    oldPrice?: string; // Optional, if not all products have an old price
    slug: string;
}

function ProductCard({ image, title, price, oldPrice }: Product) {
    return (
        <div className="w-[270px] h-[350px] bg-white shadow-[0px_8px_40px_0px_#31208A0D] flex flex-col items-center">
            <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex items-center justify-center py-4">
                <Image src={image} alt={title} width={200} height={200} className="object-contain" />
            </div>
            <div className="text-center mt-4">
                <h3 className="text-[16px] font-bold text-[#151875]">{title}</h3>
                <p className="text-[14px] font-normal text-[#151875]">{price}</p>
                <p className="text-[12px] font-normal text-[#FB2448] line-through">{oldPrice}</p>
            </div>
        </div>
    );
}

export default function TrendingProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTrendingProducts = async () => {
            try {
                const data: Product[] = await client.fetch(`
                    *[_type == "product" && isTrendingProduct == true]{
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
                console.error("Failed to fetch trending products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingProducts();
    }, []);
    if (loading) {
        return <div className="text-center py-16">Loading...</div>;
    }


    return (
        <div className="w-full py-16 bg-[#F6F7FB]">
            <h2 className="text-[42px] font-bold text-[#151875] text-center mb-8 justify-center items-center">
                Trending Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 justify-center">
                {products.map((product, index) => (
                    <Link key={product.slug} href={`productDetail/${product.slug}`}>

                        <ProductCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            slug={product.slug}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
