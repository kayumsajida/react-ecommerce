import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handaleSearchToogle = () => {
        setIsOpen(!isOpen);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        console.log ("Search Result :", searchTerm);
        setIsOpen(false);
    }

    return (
        <>
            <div className={`flex items-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 bg-white h-24 w-full" : "w-auto"} `}>
                {isOpen ? (<form onSubmit={handleSearch} className="relative w-full flex items-center justify-center">
                    <div className="relative w-1/2">
                        <input type="text" className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full text-sm" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Search..." />
                    </div>
                    <button type="submit" className="cursor-pointer relative right-8">
                        <CiSearch className="h-6 w-6 text-gray-700" />
                    </button>
                    <button onClick={handaleSearchToogle} className="cursor-pointer absolute right-4">
                        <IoIosClose className="h-6 w-6 text-gray-700" />
                    </button>
                </form>) : (
                <button onClick={handaleSearchToogle}>
                    <CiSearch className="h-6 w-6 text-gray-700 cursor-pointer" />
                </button>
                )}
            </div>
        </>
    )

};
export default SearchBar;