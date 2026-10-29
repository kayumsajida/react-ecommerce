import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrwer";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [cartdrweropen, setCartDrwaerOpen] = useState(false);

    const toogleDrawerCart = () => {
        setCartDrwaerOpen(!cartdrweropen);
    }

    const [navdraweropen, setNavDraweropen] = useState(false);

    const toogleNavDrawer = () => {
        setNavDraweropen(!navdraweropen);
    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-3 px-3">
                <div>
                    <Link to="/" className="text-2xl uppercase"><span className="font-bold">Ecommerce</span></Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-black duration-300 uppercase font-medium text-sm">Men</Link>
                    <Link to="/" className="text-gray-700 hover:text-black duration-300 uppercase font-medium text-sm">Women</Link>
                    <Link to="/" className="text-gray-700 hover:text-black duration-300 uppercase font-medium text-sm">Top Wear</Link>
                    <Link to="/" className="text-gray-700 hover:text-black duration-300 uppercase font-medium text-sm">Bottom Wear</Link>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/profile" className="hover:text-black">
                        <CgProfile className="h-5 w-6 text-gray-700" />
                    </Link>
                    <button onClick={toogleDrawerCart} className="relative hover:text-black cursor-pointer">
                        <CiShoppingCart className="h-6 w-6 text-gray-700" />
                        <span className="absolute -top-1 h-4 w-4 text-xs rounded-full bg-primary p-0.5 text-white">2</span>
                    </button>
                    {/* Search function  */}
                    <SearchBar />

                    <button onClick={toogleNavDrawer} className="md:hidden cursor-pointer">
                        <VscThreeBars className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </nav>
            <CartDrawer cartdrweropen={cartdrweropen} toogleDrawerCart={toogleDrawerCart} />

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 bg-white h-full w-3/4 sm:w-2/4 transition duration-300 z-50  ${navdraweropen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-end py-1">
                    <IoCloseOutline onClick={toogleNavDrawer} className="w-6 h-6 text-gray-600 cursor-pointer" />
                </div>
                <div className="p-2">
                    <h2 className="text-2xl font-semibold mb-2">Menu</h2>
                    <nav className="flex flex-col gap-2">
                        <Link to="#" onClick={toogleNavDrawer} className="text-sm transition duration-300 hover:text-primary">Men</Link>
                        <Link to="#" onClick={toogleNavDrawer} className="text-sm transition duration-300 hover:text-primary">Women</Link>
                        <Link to="#" onClick={toogleNavDrawer} className="text-sm transition duration-300 hover:text-primary">Top Wear</Link>
                        <Link to="#" onClick={toogleNavDrawer} className="text-sm transition duration-300 hover:text-primary">Bottom Wear</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;