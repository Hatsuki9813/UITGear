const data = [
    { name: "Màn hình", value: "13,6 inch Liquid Retina, 2560 x 1664 pixel" },
    { name: "Bộ vi xử lý", value: "Apple M3, CPU 8 nhân" },
    { name: "Bộ nhớ", value: "8GB hợp nhất, có thể nâng cấp lên 24GB" },
    { name: "Lưu trữ", value: "512GB SSD, có thể nâng cấp" },
    { name: "Cổng kết nối", value: "MagSafe, 2x USB-C, jack 3.5mm" },
    { name: "Hệ điều hành", value: "macOS Sonoma" },
    { name: "Pin", value: "Lên đến 18 giờ phát video" },
];

export default () => {
    return (
        <div className="w-full lg:w-132 flex-col gap-4 p-4 lg:p-8 bg-white rounded-md h-fit shadow-md">
            <div className="flex justify-center text-xl font-semibold">THÔNG SỐ KĨ THUẬT</div>

            <table className="mt-6 w-full border border-gray-300">
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">{item.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
