import Image from "next/image";
import bgImage from "@/app/assets/subscribebg.png";

export default function SubscribeSection(): JSX.Element {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center">
            {/* Background Image */}
            <Image
                src={bgImage}
                alt="Subscribe Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 -z-10"
            />

            {/* Content */}
            <div className="text-center space-y-6 px-4">
                <h2 className="text-[35px] font-bold text-[#151875] font-[Josefin Sans] leading-[54.25px] tracking-[0.015em]">
                    Get Latest Update By Subscribing <br /> Our Newsletter
                </h2>

                <button className="bg-[#FB2E86] text-white px-8 py-3 text-[16px] font-bold rounded-md hover:bg-[#D0276E] transition">
                    Subscribe Now
                </button>
            </div>
        </div>
    );
}
