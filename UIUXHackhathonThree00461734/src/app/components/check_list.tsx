interface CheckListProps {
    checkText: string;
}

export default function CheckList({ checkText }: CheckListProps) {
    return (
        <div className="flex items-center justify-start">
            <div className="">
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L6 12L1 7" stroke="#7569B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <p className="text-[16px] font-normal text-[#151875] ml-2">{checkText}</p>
        </div>
    );
}
