import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrival = () => { 
    const scrollRef = useRef();

const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);

const updateScrollButton = () => {
	const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
	setCanScrollLeft(scrollLeft > 0);
	setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
};

const scrollLeft = () => {
	scrollRef.current.scrollBy({
		left:-300,
		behavior: "smooth",
	});
};

const scrollRight = () => {
	scrollRef.current.scrollBy({
		left:300,
		behavior: "smooth",
	});
};

useEffect(() => {
	const slider = scrollRef.current;
	slider.addEventListener("scroll", updateScrollButton);
	updateScrollButton();
	
	return () => {
		slider.removeEventListener("scroll", updateScrollButton)
	};
	
}, []);

    const newArrivalProducts = [
        {
            _id: 1,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 2,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 3,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 4,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 5,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 6,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 7,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 8,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylist Jacket"
                },
            ]
        },
    ];    

    return (
        <>
            <section className="">
                <div className="container mx-auto text-center mb-10 relative px-3 lg:px-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">New Arrival</h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Discover the latest styles straight off the runway, <br /> freshly added to keep your wardrobe on the cutting edge of fashion.
                    </p>
                    <div className="absolute right-0 flex space-x-2">
                        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`border border-gray-400 w-8 h-8 rounded-sm flex items-center justify-center cursor-pointer ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed bg-gray-300" : ""
          }`}
        >
                            <FaAngleLeft />
                        </button>
                         <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`border border-gray-400 w-8 h-8 rounded-sm flex items-center justify-center cursor-pointer ${
            !canScrollRight ? "opacity-50 cursor-not-allowed bg-gray-300" : ""
          }`}
        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
                <div ref={scrollRef} className="container mx-auto px-3 flex space-x-6 overflow-x-auto relative">
                    {
                        newArrivalProducts.map(product => (
                            <div key={product._id} className="min-w-[100%] sm:min-w-[50%] md:min-w-[50%] lg:min-w-[30%] relative">
                                <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} className="w-full h-[500px] object-cover rounded-lg" />
                                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
                                    <Link to={`/product/${product._id}`} className="block">
                                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                        <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
                                    </Link>
                                </div>
                                
                            </div>
                        ))                    
                    }
                </div>
            </section>
        </>
    );
};

export default NewArrival;