import listViewIcon from "@/app/assets/list_view_icon.png";
import tileViewIcon from "@/app/assets/tile_view_icon.png";
import Image from "next/image";

export default function ProductsPageList() {

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="bg-[#F6F5FF] w-full h-[286px] flex flex-col items-start justify-center py-10 pl-[100px]">
                <h1 className="text-4xl text-black font-myFont font-bold mb-2">
                    Shop List
                </h1>
                <p className="text-sm text-black font-myFont font-bold">
                    Home - Pages - <span className="text-pink-500">Shop List</span>
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



        </div>
    );
}

// interface ProductsPageListProps {
//     image: StaticImageData;
//     title: string;
//     price: number;
//     discountedAmount: number;
//     rating: number;
//     reviews: number;
// }

// // function ProductListCard({
// //     image,
// //     title,
// //     price,
// //     discountedAmount,
// //     rating,
// //     reviews,
// // }: ProductsPageListProps) {
// //     return (
// //         <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-center p-6">
// //             <Image src={image} alt={title} width={200} height={200} />
// //             <h3 className="text-lg font-bold text-[#151875] mt-4">{title}</h3>
// //             <p className="text-[#151875] mt-2">
// //                 <span className="font-bold">${price}</span>{" "}
// //                 <span className="text-[#8A8FB9] line-through">${discountedAmount}</span>
// //             </p>
// //             <div className="flex items-center mt-2">
// //                 <p className="text-[#151875] font-bold">Rating: {rating}</p>
// //                 <p className="text-[#8A8FB9] ml-2">{reviews} reviews</p>
// //             </div>
// //             <button className="bg-[#151875] text-white px-4 py-2 mt-4 rounded-md">
// //                 Add to Cart
// //             </button>
// //         </div>
// //     );
// }




