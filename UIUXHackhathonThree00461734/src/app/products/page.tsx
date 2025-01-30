"use client";

import Image from "next/image";
import v3circle from "@/app/assets/v3circle.png";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartComponent from "../components/cartComponent";
import AddToCartButton from "../components/add_to_cart_button";



export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>("price-low-high");
    const [category, setCategory] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const fetchData = async () => {
        try {
            setLoading(true);

            let query = `*[_type == "product" && name match "*${searchQuery}*"]{
                "title": name,
                price,
                "image": image.asset->url,
                "slug": slug.current
            }`;

            // Sorting logic
            if (sortBy === "price-low-high") {
                query += ` | order(price asc)`;
            } else if (sortBy === "price-high-low") {
                query += ` | order(price desc)`;
            }

            // Category filter
            if (category) {
                query = `*[_type == "product" && category == "${category}" && name match "*${searchQuery}*"]{
                    "title": name,
                    price,
                    "image": image.asset->url,
                    "slug": slug.current
                } | ${sortBy === "price-low-high" ? "order(price asc)" : "order(price desc)"}`;
            }

            const data: Product[] = await client.fetch(query);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, [sortBy, category, searchQuery]);



    // const addToCart = (product: Product) => {
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



    if (loading) {
        return <div className="text-center py-16">Loading products...</div>;
    }

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="bg-[#F6F5FF] w-full h-[286px] flex flex-col items-start justify-center py-10 pl-[100px]">
                <h1 className="text-4xl text-black font-bold mb-2">Shop Grid Default</h1>
                <p className="text-sm text-black font-bold">
                    Home - Pages - <span className="text-pink-500">Shop Grid Default</span>
                </p>
            </div>

            {/* Heading and Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between py-10">
                <div>
                    <h2 className="text-[#151875] text-2xl font-bold">
                        Ecommerce Accessories & Fashion items
                    </h2>
                    <p className="text-xs text-[#8A8FB9]">About {products.length} results found</p>
                </div>
                {/* Search Input for Desktop */}
                <div className="hidden sm:flex items-center space-x-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        className="w-60 h-10 p-2 border-2 border-[#E7E6EF] focus:outline-none"
                    />
                    <button onClick={() => fetchData()} className="bg-[#FB2E86] text-white px-4 py-2">
                        {/* Search Icon */}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.7099 20.2899L17.9999 16.6099C19.44 14.8143 20.1374 12.5352 19.9487 10.2412C19.76 7.94721 18.6996 5.81269 16.9854 4.27655C15.2713 2.74041 13.0337 1.91941 10.7328 1.98237C8.43194 2.04534 6.24263 2.98747 4.61505 4.61505C2.98747 6.24263 2.04534 8.43194 1.98237 10.7328C1.91941 13.0337 2.74041 15.2713 4.27655 16.9854C5.81269 18.6996 7.94721 19.76 10.2412 19.9487C12.5352 20.1374 14.8143 19.44 16.6099 17.9999L20.2899 21.6799C20.3829 21.7736 20.4935 21.848 20.6153 21.8988C20.7372 21.9496 20.8679 21.9757 20.9999 21.9757C21.1319 21.9757 21.2626 21.9496 21.3845 21.8988C21.5063 21.848 21.6169 21.7736 21.7099 21.6799C21.8901 21.4934 21.9909 21.2442 21.9909 20.9849C21.9909 20.7256 21.8901 20.4764 21.7099 20.2899ZM10.9999 17.9999C9.61544 17.9999 8.26206 17.5894 7.11091 16.8202C5.95977 16.051 5.06256 14.9578 4.53275 13.6787C4.00293 12.3996 3.86431 10.9921 4.13441 9.63427C4.4045 8.27641 5.07119 7.02912 6.05016 6.05016C7.02912 5.07119 8.27641 4.4045 9.63427 4.13441C10.9921 3.86431 12.3996 4.00293 13.6787 4.53275C14.9578 5.06256 16.051 5.95977 16.8202 7.11091C17.5894 8.26206 17.9999 9.61544 17.9999 10.9999C17.9999 12.8564 17.2624 14.6369 15.9497 15.9497C14.6369 17.2624 12.8564 17.9999 10.9999 17.9999Z"
                                fill="#FFF"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="sortBy" className="text-sm">Sort By:</label>
                        <select
                            id="sortBy"
                            className="bg-[#E7E6EF] p-2 rounded-md text-sm focus:outline-none"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="searchByCategory" className="text-sm">Search by Category</label>
                        <select
                            name="searchByCategory"
                            id="searchByCategory"
                            className="bg-[#E7E6EF] p-2 rounded-md text-sm focus:outline-none"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Chair">Chair</option>
                            <option value="Sofa">Sofa</option>
                        </select>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                        <span className="text-sm">View:</span>
                        <Image src={tileViewIcon} alt="Tile view" width={16} height={16} className="cursor-pointer" />
                        <Image src={listViewIcon} alt="List view" width={16} height={16} className="cursor-pointer" />
                    </div> */}
                </div>
            </div>

            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Link key={product.slug} href={`productDetail/${product.slug}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
            <div>
                <CartComponent />
            </div>
        </div>
    );
}

interface ProductCardProps {
    product: Product;

}

function ProductCard({ product }: ProductCardProps) {
    const { title, price, discountedPrice, image } = product;

    return (
        <div className="border p-4 shadow-md rounded-md w-[270px] h-[363px] flex flex-col items-center justify-center">
            <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden rounded">
                <Image
                    src={image || "/default-product-image.png"}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-cover"
                />
            </div>
            <h3 className="text-lg font-bold mt-2 text-center">{title}</h3>
            <div className="w-[42px] h-[42px] my-2">
                <Image src={v3circle} alt="v3" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500 font-bold">${price}</p>
                {discountedPrice && (
                    <p className="text-xs text-pink-500 line-through">${discountedPrice}</p>
                )}
            </div>
            <AddToCartButton product={product} />
            {/* <button
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
                className="bg-pink-500 text-white py-2 px-6 rounded"
            >
                Add to Cart
            </button> */}
        </div>
    );
}
