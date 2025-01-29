import Image from "next/image";
import blogImage1 from "@/app/assets/blog1.png";
import blogImage2 from "@/app/assets/blog2.png";
import blogImage3 from "@/app/assets/blog3.png";
import calenderIcon from "@/app/assets/calender_icon.png";
import penIcon from "@/app/assets/pen_icon.png";
import { StaticImageData } from "next/image";

export default function LatestBlogSection(): JSX.Element {
    const blogs = [
        {
            id: 1,
            title: "Top esssential Trends in 2021",
            author: "SaberAli",
            date: "21 August, 2020",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mightily.",
            Image: blogImage1,

        },
        {
            id: 2,
            title: "Top esssential Trends in 2021",
            author: "Surfauxion",
            date: "21 August, 2020",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mightly",
            Image: blogImage2,
        },
        {
            id: 3,
            title: "Top esssential Trends in 2021",
            author: "SaberAli",
            date: "21 August, 2020",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mightly",
            Image: blogImage3,
        },
    ];

    return (
        <div className="w-full py-16 px-8">
            {/* Heading */}
            <h2 className="text-[42px] font-bold text-[#151875] font-[Josefin Sans] mb-8 text-center">
                Latest Blog
            </h2>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        image={blog.Image}
                        title={blog.title}
                        author={blog.author}
                        date={blog.date}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    );
}

// Blog Card Component


interface BlogCardProps {
    image: StaticImageData;
    title: string;
    author: string;
    date: string;
    description: string;
}

function BlogCard({ image, title, author, date, description }: BlogCardProps): JSX.Element {
    return (
        <div className="w-[370px] h-[493px] bg-white shadow-md rounded-md overflow-hidden">
            {/* Image */}
            <div className="w-full h-[255px]">
                <Image src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Author and Date */}
                <div className="flex items-center justify-between text-[#72718F] font-[Josefin Sans] text-[14px] mb-4">
                    <div className="flex items-center">
                        <Image src={penIcon} alt="Pen Icon" height={11.33} width={11.33} />
                        <span>{author}</span></div>

                    <div className="flex items-center">
                        <Image src={calenderIcon} alt="Calender Icon" height={11.33} width={11.33} />
                        <span>{date}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-[#151875] font-bold text-[18px] mb-2">{title}</h3>

                {/* Description */}
                <p className="text-[#72718F] text-[16px] leading-[30px] font-[Lato] mb-4">
                    {description}
                </p>

                {/* Read More Link */}
                <a
                    href="#"
                    className="text-[#151875] underline text-[16px] leading-[30px] font-[Lato]"
                >
                    Read More
                </a>
            </div>
        </div>
    );
}
