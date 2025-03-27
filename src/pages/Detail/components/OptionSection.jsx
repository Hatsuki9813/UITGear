import OptionBox from "./OptionBox";

export default ({ title, values }) => {
    return (
        <div className="w-full gap-4 flex flex-col">
            <span className="font-medium">{title}</span>
            <span className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {values.map((value, i) => {
                    return <OptionBox key={i} value={value} />;
                })}
            </span>
        </div>
    );
};
