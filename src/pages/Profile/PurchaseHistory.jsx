import { useState } from "react";

const data = [
    { orderId: "DH001", status: "Đã giao", deliveryDate: "2024-03-20", total: "1.500.000 VND" },
    { orderId: "DH002", status: "Chờ xác nhận", deliveryDate: "2024-03-22", total: "3.200.000 VND" },
    { orderId: "DH003", status: "Đang giao", deliveryDate: "2024-03-25", total: "750.000 VND" },
    { orderId: "DH004", status: "Đã hủy", deliveryDate: "-", total: "0 VND" },
    { orderId: "DH005", status: "Đã giao", deliveryDate: "2024-03-18", total: "2.100.000 VND" },
];

const ITEMS_PER_PAGE = 4;

const getStatusColor = (status) => {
    switch (status) {
        case "Đã giao":
            return "text-[#2DB224]";
        case "Đã hủy":
            return "text-[#EE5858]";
        case "Đang giao":
            return "text-[#FA8232]";
        case "Chờ xác nhận":
            return "text-black";
        default:
            return "";
    }
};

export default () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const paginatedData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="flex flex-col gap-4 px-10">
            <h1 className="font-semibold text-xl flex justify-center mb-4">LỊCH SỬ MUA HÀNG</h1>
            <table className="mt-6 w-full border border-gray-300 table-fixed border-separate border-spacing-0">
                <thead>
                    <tr className="bg-[#CBE4ED]">
                        <th className="px-4 py-2 font-bold text-left">Mã đơn hàng</th>
                        <th className="px-4 py-2 font-bold text-left">Trạng thái</th>
                        <th className="px-4 py-2 font-bold text-left">Ngày giao</th>
                        <th className="px-4 py-2 font-bold text-left">Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                            <td className=" border-gray-300 px-4 py-2 font-semibold">{item.orderId}</td>
                            <td className={` border-gray-300 px-4 py-2 font-semibold ${getStatusColor(item.status)}`}>{item.status.toUpperCase()}</td>
                            <td className=" border-gray-300 px-4 py-2">{item.deliveryDate}</td>
                            <td className=" border-gray-300 px-4 py-2">{item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <button className="px-4 py-2 mx-2 border rounded disabled:opacity-50" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    Trước
                </button>
                <span className="px-4 py-2">
                    Trang {currentPage} / {totalPages}
                </span>
                <button className="px-4 py-2 mx-2 border rounded disabled:opacity-50" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    Sau
                </button>
            </div>
        </div>
    );
};
