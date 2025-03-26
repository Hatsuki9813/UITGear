import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default ({ quantity, setQuantity }) => {
    return (
        <div className="flex flex-1 h-15 flex-row border-2 border-[#e0e0e0] items-center rounded-sm">
            <button className="flex-1 h-full cursor-pointer flex items-center justify-center" onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
                <MinusIcon className="h-5 transition-colors ease-in duration-200 hover:text-[#018abe]" />
            </button>

            <input
                className="flex-2 h-full font-semibold text-xl w-16 text-center outline-0"
                value={quantity}
                maxLength={2} // Giới hạn tối đa 2 ký tự
                onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val) && val.length <= 2) {
                        // Chỉ cho phép nhập số và tối đa 2 ký tự
                        setQuantity(val === "" ? "" : parseInt(val, 10));
                    }
                }}
                onBlur={() => {
                    if (!quantity || isNaN(quantity) || quantity < 1) {
                        setQuantity(1); // Nếu không hợp lệ, reset về 1
                    }
                }}
            />

            <button className="flex-1 h-full cursor-pointer flex items-center justify-center " onClick={() => setQuantity((prev) => (prev < 99 ? prev + 1 : prev))}>
                <PlusIcon className="h-5 transition-colors ease-in duration-200 hover:text-[#018abe]" />
            </button>
        </div>
    );
};
