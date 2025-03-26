import { UserIcon } from "@heroicons/react/24/outline";

export default () => {
    return (
        <div className="flex flex-col gap-4 px-72">
            <h1 className="font-semibold text-xl flex flex-1 justify-center mb-4">THÔNG TIN CÁ NHÂN</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-1 justify-center">
                    <div className="border-1 border-[rgb(2,69,122)] w-24 h-24 rounded-full flex items-center justify-center">
                        <UserIcon className="h-10" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Họ và tên</span>
                    <input placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Ngày sinh</span>
                    <input type="date" placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Giới tính</span>
                    <div className="flex flex-row gap-4">
                        <div className="flex gap-2">
                            <input type="radio" value="Nam" name="gender-radio" placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0" />
                            <span>Nam</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" value="Nữ" name="gender-radio" placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0" />
                            <span>Nữ</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Email</span>
                    <input placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Số điện thoại</span>
                    <input placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Địa chỉ</span>
                    <input placeholder="Input here" className="border-1 border-[#e0e0e0] rounded-sm p-2 outline-0"></input>
                </div>
                <div className="mt-4 flex flex-1 justify-center">
                    <button className="border-2 rounded-sm transition-colors ease-in duration-200 border-[#02457a] hover:text-black text-white hover:bg-white bg-[#02457a] w-fit py-2 flex px-20 cursor-pointer font-medium">
                        Cập nhật thông tin
                    </button>
                </div>
            </form>
        </div>
    );
};
