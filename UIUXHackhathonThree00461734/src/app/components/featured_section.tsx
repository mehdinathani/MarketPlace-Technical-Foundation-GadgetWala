import Image from "next/image";
import FeaturedImage from "@/app/assets/f1.png";

export default function FeaturedSection() {
    return (
        <div className="w-full h-[579px] bg-white flex items-center justify-center">
            {/* Left Image */}
            <div className="w-[558px] h-[550px] -ml-2">
                <Image src={FeaturedImage} alt="Featured Product" className="object-cover w-full h-full" />
            </div>

            {/* Right Content */}
            <div className="ml-8">
                {/* Title */}
                <h2 className="text-[35px] font-bold text-[#151875] leading-[46.2px] mb-8">
                    Unique Features Of Latest & Trending Products
                </h2>

                {/* Description */}
                <p className="text-[16px] font-medium text-[#ACABC3] leading-[21.12px] mb-8">
                    All frames constructed with hardwood solids and laminates
                </p>

                {/* Nested Row */}
                <div className="flex items-center">
                    {/* Button */}
                    <button className="w-[157px] h-[45px] bg-pink-600 text-white rounded-md text-[14px] font-semibold mr-4">
                        Add To Cart
                    </button>

                    {/* Nested Column */}
                    <div>
                        <p className="text-[14px] font-bold text-[#151875] mb-2">
                            B&B Italian Sofa
                        </p>
                        <p className="text-[14px] text-[#151875]">$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
