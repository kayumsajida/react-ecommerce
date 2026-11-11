import { useEffect, useRef, useState } from "react";
import { CiFilter } from "react-icons/ci";
import FilterSidebar from "../components/Product/FilterSidebar";

const CoolectionPage = () => {
    const [products, setProducts] = useState([]);
    const[isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);

    const handleSidebarOpen = () => {
        setIsSidebarOpen(true);
    }

    const handleClickOutSide = (e) => {
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
       return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
       }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                {
                    _id: "1",
                    name: "Product 1",
                    price: 100,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=1",
                            altText: "Product 1"
                        }
                    ]
                },
                {
                    _id: "2",
                    name: "Product 2",
                    price: 150,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=2",
                            altText: "Product 2"
                        }
                    ]
                },
                {
                    _id: "3",
                    name: "Product 3",
                    price: 200,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=3",
                            altText: "Product 3"
                        }
                    ]
                },
                {
                    _id: "4",
                    name: "Product 4",
                    price: 250,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=4",
                            altText: "Product 4"
                        }
                    ]
                },
                {
                    _id: "5",
                    name: "Product 5",
                    price: 300,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=5",
                            altText: "Product 5"
                        }
                    ]
                },
                {
                    _id: "6",
                    name: "Product 6",
                    price: 350,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=6",
                            altText: "Product 6"
                        }
                    ]
                },
                {
                    _id: "7",
                    name: "Product 7",
                    price: 400,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=7",
                            altText: "Product 7"
                        }
                    ]
                },
                {
                    _id: "8",
                    name: "Product 8",
                    price: 450,
                    image: [
                        {
                            url: "https://picsum.photos/200/200?random=8",
                            altText: "Product 8"
                        }
                    ]
                },
            ];
            setProducts(fetchProducts);
        }, 1000);
    }, []);
    return (
        <>
            <div className="flex flex-col lg:flex-flex-row">
                {/* Mobile Filter button */}
                <button className="lg:hidden flex items-center justify-center cursor-pointer p-2" onClick={handleSidebarOpen}>
                    <CiFilter /> Filter
                </button>
                {/* filter sidebar */}
                <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-60 bg-white shadow-md fixed top-0 z-20 overflow-y-auto transition-transform duration-300 lg:static`}>
                    <FilterSidebar />
                </div>
            </div>
        </>
    );
};

export default CoolectionPage;