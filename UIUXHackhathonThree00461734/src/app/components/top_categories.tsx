import Image, { StaticImageData } from "next/image";
import productImage1 from "@/app/assets/tc1.png";
import productImage2 from "@/app/assets/tc2.png";
import productImage3 from "@/app/assets/tc3.png";
import productImage4 from "@/app/assets/tc4.png";

interface ProductCardProps {
    title: string;
    price: string;
    image: StaticImageData;
}

function ProductCard({ title, price, image }: ProductCardProps): JSX.Element {
    return (
        <div className="w-[269px] h-[345px] bg-[#F6F7FB] shadow-md rounded-md flex flex-col items-center justify-center">
            {/* Product Image */}
            <div className="w-[149px] h-[149px]">
                <Image src={image} alt={title} className="object-contain" />
            </div>

            {/* Product Details */}
            <h3 className="text-[20px] font-bold text-[#151875] mt-6">{title}</h3>
            <p className="text-[16px] font-bold text-[#151875] mt-2">{price}</p>
        </div>
    );
}

export default function TopCategories(): JSX.Element {
    const products = [
        { title: "Mini LCW Chair", price: "$56.00", image: productImage1 },
        { title: "Modern Sofa", price: "$72.00", image: productImage2 },
        { title: "Wooden Table", price: "$89.00", image: productImage3 },
        { title: "Stylish Lamp", price: "$40.00", image: productImage4 },
    ];

    return (
        <div className="w-full py-16 px-8 flex flex-col items-center justify-center bg-[#F6F7FB]">
            {/* Section Heading */}
            <h2 className="text-[42px] font-bold text-[#151875] font-[Josefin Sans] mb-8">
                Top Categories
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}
