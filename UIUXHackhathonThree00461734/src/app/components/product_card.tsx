// LatestProducts.tsx
import Image from "next/image";
import v3Icon from "@/app/assets/v3.png";
import AddToCartButton from "./add_to_cart_button";

// Define Props Type
interface IProduct {
    image: string;
    title: string;
    price: number;
    oldPrice?: string; // Optional, if not all products have an old price
    slug: string;
}

// Product Card Component
function ProductCard({ image, title, price, slug }: IProduct) {
    const product: IProduct = { image, title, price, slug }; // Creating the product object to pass

    return (
        <div className="w-[270px] h-[400px] bg-white shadow-lg rounded-lg mx-auto">
            <div className="w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    className="w-[178px] h-[178px] object-contain"
                    width={178}
                    height={178}
                />
            </div>
            <div className="p-4 flex flex-col text-center items-center">
                {/* ✅ Prevent title from wrapping */}
                <h3 className="text-lg font-bold text-[#151875] w-[90%] whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                </h3>

                <Image src={v3Icon} alt="V3 Icon" width={52} height={20} />
                <p className="text-sm text-[#ACABC3]">Code: {slug}</p>
                <p className="text-lg font-bold text-[#FB2E86]">${price}</p>
            </div>

            {/* ✅ Corrected AddToCartButton usage */}
            <div className="flex justify-center my-2">
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}

export default ProductCard;
