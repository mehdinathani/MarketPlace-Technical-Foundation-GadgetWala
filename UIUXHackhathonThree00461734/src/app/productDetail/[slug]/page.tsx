
import { client } from "@/sanity/lib/client"
import Image from "next/image";
import listViewIcon from "@/app/assets/list_view_icon.png";
import tileViewIcon from "@/app/assets/tile_view_icon.png";
import heartIcon from "@/app/assets/heart_icon.png";
import fbIcon from "@/app/assets/fb_icon.png";
import instaIcon from "@/app/assets/insta_icon.png";
import twitterIcon from "@/app/assets/x_icon.png";
import StarRatingComponent from "./start_rating";







interface Props {
    params: {
        slug: string
    }
}

interface Product {

    title: string;
    price: number;
    discountedPrice: number;
    image: string;
    slug: string;
    description: string;
    rating: number;
    ratingCount: number;
    isFeaturedProduct: boolean;
    isTrendingProduct: boolean;
    isLatestProduct: boolean;
    category: string;


};

export default async function productDetail({ params }: Props) {

    const socialIcons = [fbIcon, instaIcon, twitterIcon];
    const data: Product[] = await client.fetch(
        `
         *[_type == "product"]{
       "title": name,
        "price": price,
        "image": image.asset->url,
        "rating": starRating,
        "ratingCount": ratingCount,
        "slug": slug.current,
        "description": description,
        "isFeaturedProduct": isFeaturedProduct,
        "category": category,
        "isTrendingProduct": isTrendingProduct}
        `    )

    const product = data[0];
    console.log("Fetched data:", data);

    console.log("page slug" + params.slug.toString);
    console.log("Product Image" + product.image);
    return (

        <div className="">

            {/* Hero Section */}
            <div className="bg-[#F6F5FF] w-full h-[286px] flex flex-col items-start justify-center py-10 pl-[100px]">
                <h1 className="text-4xl text-black font-myFont font-bold mb-2">
                    Product Details
                </h1>
                <p className="text-sm text-black font-myFont font-bold">
                    Home - Pages - <span className="text-pink-500">Product Details</span>
                </p>
            </div>

            {/* Heading and Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between py-10">
                {/* Heading */}
                <div>
                    <h2 className="text-[#151875] text-2xl font-bold">
                        Ecommerce Accessories & Fashion item
                    </h2>
                    <p className="text-xs text-[#8A8FB9]">
                        About 9,620 results (0.62 seconds)
                    </p>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="perPage" className="text-sm">
                            Per Page:
                        </label>
                        <input
                            id="perPage"
                            type="text"
                            className="bg-[#E7E6EF] w-16 h-8 rounded-md px-2 text-sm focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="sortBy" className="text-sm">
                            Sort By:
                        </label>
                        <select
                            id="sortBy"
                            className="bg-[#E7E6EF] p-2 rounded-md text-sm focus:outline-none"
                        >
                            <option value="relevance">Relevance</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-sm">View:</span>
                        <Image
                            src={tileViewIcon}
                            alt="Tile view"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                        <Image
                            src={listViewIcon}
                            alt="List view"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            {/* Product Detail */}
            <div className="flex flex-col md:flex-row items-center px-[200px] text-[#0D134E] gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">

                    <Image layout=""
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 flex flex-col font-myFont">
                    <h1 className="text-[#0D134E] text-4xl leading-10">{product.title}</h1>
                    <div className="flex flex-row my-4">
                        <StarRatingComponent rating={product.rating} />
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <p className="text-sm text-gray-500 font-bold">${product.price}</p>
                        <p className="text-xs text-pink-500 line-through">
                            ${product.discountedPrice ? product.discountedPrice : product.price}
                        </p>
                    </div>

                    <p className="mb-4">{product.description}</p>

                    <div className="flex gap-4 my-4">
                        <button className="bg-pink-500 text-white py-2 px-6 rounded">Add to Cart</button>
                        <Image src={heartIcon} alt="heart Icon" width={24} height={24} />
                    </div>

                    <div className="mt-4">
                        <p className="font-bold">Categories:</p>
                        <p className="text-sm text-gray-600">{product.category}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold">Tags:</p>
                        <p className="text-sm text-gray-600">{product.isFeaturedProduct ?? "Featured"}{product.isLatestProduct ?? "Latest"}{[product.isTrendingProduct ?? "Trending"]}</p>
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



    )

}