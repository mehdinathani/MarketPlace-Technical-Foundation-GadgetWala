import Image, { StaticImageData } from "next/image";
import Icon1 from "@/app/assets/WSO1.png";
import Icon2 from "@/app/assets/WSO2.png";
import Icon3 from "@/app/assets/WSO3.png";
import Icon4 from "@/app/assets/WSO4.png";

// Define types for the props
type FeatureCardProps = {
    image: StaticImageData;  // The type for the image
    title: string;
    description: string;
};

const features = [
    { id: 1, image: Icon1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
    { id: 2, image: Icon2, title: "Fast Delivery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
    { id: 3, image: Icon3, title: "Secure Payment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
    { id: 4, image: Icon4, title: "Premium Quality", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
];

function FeatureCard({ image, title, description }: FeatureCardProps) {
    return (
        <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col items-center text-center p-6">
            <div className="w-[65px] h-[65px] mb-4">
                <Image src={image} alt={title} className="object-contain" />
            </div>
            <h3 className="text-[22px] font-bold text-[#151875]">{title}</h3>
            <p className="text-[16px] font-semibold text-[#1A0B5B4D] leading-[25.6px]">
                {description}
            </p>
        </div>
    );
}

export default function ShopexOffer() {
    return (
        <div className="w-full py-16 items-center justify-center bg-[#F6F7FB]">
            <h2 className="text-[42px] font-bold text-[#151875] text-center mb-12">
                What Shopex Offer!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 justify-center">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        image={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    );
}
