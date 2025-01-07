import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <img className="w-10" src={logo} alt="" />
                <span className="font-bold ml2">Task</span> Master
            </div>
        </nav>
    );
};

export default Navbar;