import rentals from "../../assets/rentals.png"

const Logo = () => {
    return (
        <div className="logo h-16 w-16 flex items-center  py-2 pl-4 md:pl-10">
            {/* <img src={rentals} alt="crentals logo" /> */}
            <h2 className="text-primary text-2xl font-bold font-font">cRENTALS</h2>
        </div>
    )
};

export default Logo;