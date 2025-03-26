import { useState } from "react";
import formatCurrency from "../../../utils/formatCurrency";

import OptionSection from "./OptionSection";
import QuantitySelector from "./QuantitySelector";

const isOption = true;

export default function Details() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-1 flex-col p-4 lg:p-8 gap-8 h-fit">
            <div className="flex flex-1 flex-col gap-4">
                <span className="text-xl font-semibold text-justify">2020 Apple MacBook Pro with Apple M1 Chip</span>
                <div className="flex flex-1 gap-4 flex-wrap">
                    <span>
                        Tình trạng: <span className="font-semibold text-[#2DB224]">Còn hàng</span>
                    </span>
                    <span> | </span>
                    <span className="">
                        Mã: <span className="font-semibold">ABCD1234</span>
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <span className="w-full font-medium text-[#8c8c8c] line-through text-xl">{formatCurrency(25990000)}</span>
                    <span className="flex items-center gap-3">
                        <span className="font-semibold text-[#02457a] text-3xl">{formatCurrency(28990000)}</span>
                        <span className="bg-[#d6e8ee] border-2 border-[#02457a] rounded-sm px-2 text-[#02457a] font-semibold text-lg">-12%</span>
                    </span>
                </div>
            </div>

            {isOption && (
                <div className="flex flex-col gap-6">
                    <OptionSection title="Màu sắc" values={["Xám", "Xanh đen", "Bạc"]} />
                    <OptionSection title="Dung lượng" values={["256 GB", "512 GB", "1 TB"]} />
                    <OptionSection title="Kích thước màn hình" values={["13.4 inch", "14 inch", "15.6 inch"]} />
                </div>
            )}
            <div className={`flex ${isOption && "mt-6"} gap-4 flex-wrap flex-col sm:flex-row`}>
                {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity} /> */}
                <button className="flex-2 py-4 bg-white border-[#02457a] text-[#02457a] border-2 cursor-pointer font-semibold rounded-sm hover:border-[#018abe] hover:text-[#018abe] transition-colors duration-200 ease-in">
                    THÊM VÀO GIỎ HÀNG
                </button>
                <button className="w-full sm:flex-2 py-[18px] sm:py-4 bg-[#02457a] text-white cursor-pointer font-semibold rounded-sm hover:bg-[#018abe] transition-colors duration-200 ease-in">
                    MUA NGAY
                </button>
            </div>
        </div>
    );
}
