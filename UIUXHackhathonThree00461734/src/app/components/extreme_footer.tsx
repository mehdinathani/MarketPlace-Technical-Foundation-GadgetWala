import fbIcon from "@/app/assets/fb_icon.png";
import instaIcon from "@/app/assets/insta_icon.png";
import xIcon from "@/app/assets/x_icon.png";
import Image from "next/image";


export default function ExtremeFooter() {
    return (
        <div className="w-full flex justify-around items-center bg-[#F5F6FA] py-12">
            <div className="text-[#9DA0AE] font-[Lato] text-[16px]">
                ©Webecy - All Rights Reserved
            </div>
            <div className="flex space-x-4">
                <Image src={fbIcon} alt="facebook icon" width={30} height={30} />
                <Image src={instaIcon} alt="instagram icon" width={30} height={30} />
                <Image src={xIcon} alt="x icon" width={30} height={30} />
            </div>

        </div>
    );
}