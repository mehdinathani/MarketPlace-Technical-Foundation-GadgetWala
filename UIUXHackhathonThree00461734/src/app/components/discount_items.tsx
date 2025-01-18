import Image from "next/image";
import discountImage from "@/app/assets/discountedItem.png";
import CheckList from "./check_list";

export default function DiscountItem(): JSX.Element {
    const checkListText = [
        "Material expose like metals",
        "Clear lines and geometric figures",
        "Simple neutral colours.",
        "Material expose like metals",
    ];
    return (
        <div className="w-full py-16 bg-[#F6F7FB] px-8 flex flex-col items-center justify-center">
            {/* Heading */}
            <h2 className="text-[42px] font-bold text-[#151875] font-[Josefin Sans] mb-8">
                Discount Item
            </h2>

            {/* Navbar */}
            <div className="flex space-x-8 mb-12">
                <NavItem title="Wood Chair" active={true} />
                <NavItem title="Plastic Chair" />
                <NavItem title="Sofa Chair" />
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                {/* Left Column - Text */}
                <div className="space-y-6">
                    <h3 className="text-[#151875] text-4xl leading-[46.2px] font-bold font-[Josefin Sans]">
                        20% Discount Of All Products
                    </h3>
                    <h3 className="text-[#FB2E86] text-[21px] leading-[27.72px] font-[Josefin Sans]">
                        Eams Sofa Compact
                    </h3>
                    <h3 className="text-[36px] font-bold text-[#151875] font-[Josefin Sans]">
                        Modern Wood Chair
                    </h3>

                    <p className="text-[17px] text-[#B7BACB] font-[Lato] font-normal leading-8 tracking-wider">
                        Experience ultimate comfort with this modern wood chair, designed to
                        provide a relaxing experience while enhancing your home’s aesthetic.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        {checkListText.map((text, index) =>
                            <CheckList key={index} checkText={text} />
                        )}
                    </div>

                    <button className="bg-[#FB2E86] text-white px-6 py-3 font-bold font-myFont text-[17px] rounded-sm w-[200px] h-[57px]">
                        Shop Now
                    </button>
                </div>

                {/* Right Column - Image */}
                <div className="flex justify-center">
                    <Image
                        src={discountImage}
                        alt="Discount Product"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

// Navbar Item Component
interface NavItemProps {
    title: string;
    active?: boolean;
}

function NavItem({ title, active = false }: NavItemProps): JSX.Element {
    return (
        <button
            className={`text-[18px] font-[Lato] font-normal ${active ? "text-[#FB2E86]" : "text-[#151875]"
                }`}
        >
            {title}
        </button>
    );
}
