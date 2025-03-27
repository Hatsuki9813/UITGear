import formatCurrency from "../utils/formatCurrency";
import { Link } from "react-router-dom";

export default ({ data, border, whereToUse }) => {
    return (
        <Link to="/detail" className={`flex flex-col rounded-md bg-white p-3 ${whereToUse == "list" ? "w-full" : "w-55"} h-full ${border && "border-[#e0e0e0] border-2"} cursor-pointer`}>
            <div className="flex flex-1 justify-center mb-2">
                <img src={data.img} alt={data.name} className="w-fit" />
            </div>
            <span className="font-semibold line-clamp-3 mb-2">{data.name}</span>
            {data.discountPrice && <span className="font-bold text-[#8c8c8c] text-sm line-through mb-1">{formatCurrency(data.price)}</span>}
            <div className="flex flex-row gap-2 items-center">
                <span className="text-[#F01313] font-bold text-left">{data.discountPrice ? formatCurrency(data.discountPrice) : formatCurrency(data.price)}</span>
                {data.discountPrice && (
                    <span className="bg-red-100 border-1 border-red-600 rounded-sm px-2 text-red-600 font-semibold">{Math.round((data.discountPrice / data.price - 1) * 100)}%</span>
                )}
            </div>
        </Link>
    );
};
