import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
            <div className="flex items-center">
                <Link to={"/"}>
                    <img className="w-10" src={logo} alt="" />
                </Link>
                <span className="font-bold ml2">Task</span> Master
            </div>
            <div className=" space-x-2">
                <Link to={"/"}><Button>Tasks</Button></Link>
                <Link to={"/users"}><Button>Users</Button></Link>
            </div>
        </nav>
    );
};

export default Navbar;