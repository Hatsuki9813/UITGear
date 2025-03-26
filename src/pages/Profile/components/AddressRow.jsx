export default ({ edit, defaultAddress }) => {
    return (
        <div className="flex flex-1 justify-between border-2 border-[#e0e0e0] rounded-sm items-center px-4 py-2">
            <div className="flex flex-col">
                <span>Trung Thuận</span>
                <span>0356210749</span>
                <span>20/12 Đường 25, TP. Thủ Đức</span>
            </div>
            {defaultAddress && <span className="font-bold text-[#02457a]">*Mặc định</span>}
            <div className="flex h-fit gap-2">
                <button className="px-5 py-2 text-[#02457a] cursor-pointer font-medium" onClick={edit}>
                    Sửa
                </button>
                <button className="px-5 py-2 text-white bg-[#02457a] rounded-sm cursor-pointer font-medium">Xoá</button>
            </div>
        </div>
    );
};
