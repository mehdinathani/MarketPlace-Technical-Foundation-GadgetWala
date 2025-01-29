import React from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="w-full bg-[#EEEFFB] py-12 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
                {/* Main Section */}
                <div className="space-y-6">
                    <h2 className="text-[38px] font-bold font-myFont text-[#000000]">
                        Hekto
                    </h2>
                    {/* <p className="text-[16px] font-[Lato] text-[#8A8FB9]">
                        Get the latest updates by subscribing to our newsletter.
                    </p> */}
                    <div className="flex items-center rounded-sm border border-[#8A8FB9] w-[377px] h-[44px] ">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-[250px] h-[44px] px-4 border border-[#8A8FB9] rounded-l-md focus:outline-none"
                        />
                        <button className="bg-[#FB2E86] text-white font-[Josefin Sans] text-[16px] h-[39px] w-[135px] px-6 rounded-sm">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Reusable Sections */}
                <FooterSection
                    title="Categories"
                    items={[
                        "Laptops & Computers",
                        "Cameras & Photography",
                        "Smart Phones & Tablets",
                        "Video Games & Consoles",
                        "Waterproof Headphones",
                    ]}
                />
                <FooterSection
                    title="Customer Care"
                    items={[
                        "My Account",
                        "Discount",
                        "Returns",
                        "Orders History",
                        "Order Tracking",
                    ]}
                />
                <FooterSection
                    title="Our Services"
                    items={[
                        "Blog",
                        "Browse the Shop",
                        "Category",
                        "Pre-Built Pages",
                        "Visual Composer Elements",
                        "WooCommerce Pages"
                    ]}
                />
            </div>
        </footer>
    );
}

// Reusable Footer Section Component
interface FooterSectionProps {
    title: string;
    items: string[];
}

function FooterSection({ title, items }: FooterSectionProps): JSX.Element {
    return (
        <div className="space-y-6">
            <h2 className="text-[22px] font-bold font-[Josefin Sans] text-[#000000]">
                {title}
            </h2>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-[16px] font-[Lato] text-[#8A8FB9] hover:text-[#151875] cursor-pointer"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
