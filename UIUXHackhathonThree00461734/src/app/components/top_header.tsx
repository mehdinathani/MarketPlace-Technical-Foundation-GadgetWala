// components/TopHeader.tsx

import Image from "next/image";
import env from "@/app/assets/uil_envelope-alt.png";
import downIcon from "@/app/assets/down_arrow.png";
import heartIcon from "@/app/assets/heart_icon.png";
import userIcon from "@/app/assets/user_icon.png";

export default function TopHeader() {
    return (
        <div className="w-full h-auto bg-[#7E33E0] text-white flex flex-wrap justify-center items-center space-x-4 md:space-x-6 px-4 py-2">
            {/* Left Section */}
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <div className="w-4 h-4 relative">
                    <Image src={env} alt="Envelope Icon" layout="fill" objectFit="contain" />
                </div>
                <span className="text-sm md:text-base font-medium">mhhasanul@gmail.com</span>
            </div>

            {/* Middle Section */}
            <div className="flex flex-wrap justify-center items-center space-x-4 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                    <span>English</span>
                    <Image src={downIcon} alt="down" height={5} width={10} />
                </div>
                <div className="flex items-center space-x-2">
                    <span>USD</span>
                    <Image src={downIcon} alt="down" height={5} width={10} />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-wrap justify-center items-center space-x-4 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                    <span>Login</span>
                    <Image src={userIcon} alt="User Icon" height={16} width={16} />
                </div>
                <div className="flex items-center space-x-2">
                    <span>Wishlist</span>
                    <Image src={heartIcon} alt="Heart Icon" height={16} width={16} />
                </div>
            </div>
        </div>
    );
}
