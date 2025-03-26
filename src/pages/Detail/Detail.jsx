import Display from "./layouts/Display";
import InfoAndSpecifications from "./layouts/InfoAndSpecifications";

export default () => {
    return (
        <div className="flex flex-1 flex-col gap-8">
            <Display />
            <InfoAndSpecifications />
        </div>
    );
};
