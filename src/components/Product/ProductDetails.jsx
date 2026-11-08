import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
    name: "Stylist Jacket",
    price: 120,
    originalPrice: 150,
    description: "Product description goes here. This is a sample product description.",
    brand: "Fashion Brand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylist Jacket 1"
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylist Jacket 2"
        },
    ]
}


const ProductDetails = () => {

    const [mainproduct, setMainProduct] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isbuttonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct && selectedProduct.images && selectedProduct.images.length > 0) {
            setMainProduct(selectedProduct.images[0].url);
        }
    }, [selectedProduct])

    const handleQuantityChange = (action) => {
        if (action === "Plus") {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (action === "Minus" && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.", {
                duration: 1000,
            });
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
            toast.success("Product added to cart!", {
                duration: 500,
            });
        }, 1000);
    };


    const similarProducts = [
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
    ];

    return (
        <>
            <section className="py-10">
                <div className="max-w-6xl mx-auto p-3 rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row">
                        <div className="hidden md:flex flex-col space-y-4 mr-4">
                            {/* Left Thumbnails */}
                            {selectedProduct.images.map((image, index) => (
                                <img key={index} src={image.url} onClick={() => setMainProduct(image.url)} className={`h-20 w-20 object-cover cursor-pointer rounded-lg ${mainproduct === image.url ? 'border border-gray-300' : ''}`} alt={image.altText || `Thumbnail ${index}`} />
                            ))}
                        </div>
                        {/* main product image */}
                        <div className="md:w-1/2">
                            <div className="mb-4">
                                <img src={mainproduct} className="w-full h-auto object-cover rounded-lg" alt="Main Product" />
                            </div>
                        </div>
                        <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
                            {/* Left Thumbnails */}
                            {selectedProduct.images.map((image, index) => (
                                <img key={index} src={image.url} onClick={() => setMainProduct(image.url)} className={`h-20 w-20 object-cover cursor-pointer rounded-lg ${mainproduct === image.url ? 'border border-gray-300' : ''}`} alt={image.altText || `Thumbnail ${index}`} />
                            ))}
                        </div>
                        <div className="md:w-1/2 md:ml-6">
                            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                            <p className="text-gray-600 mb-4 text-sm line-through">${selectedProduct.originalPrice.toFixed(2)}</p>
                            <p className="text-3xl font-bold mb-2">${selectedProduct.price.toFixed(2)}</p>
                            <p className="text-gray-600 mb-4 text-sm">{selectedProduct.description}</p>
                            <div className="mb-4">
                                <p className="text-gray-600 mb-2">Colors:</p>
                                <div className="flex gap-2">
                                    {selectedProduct.colors.map((color, index) => (
                                        <button key={index} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? "border border-black" : 'border border-gray-300'}`} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.8)", }}></button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 mb-2">Size:</p>
                                <div className="flex gap-2">
                                    {selectedProduct.sizes.map((size, index) => (
                                        <button key={index} onClick={() => setSelectedSize(size)} className={`w-8 h-8 items-center text-sm border rounded cursor-pointer ${selectedSize === size ? 'bg-black text-white' : ''}`}>{size}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 mb-2">Quantity:</p>
                                <div className="flex gap-2">
                                    <button onClick={() => handleQuantityChange("Minus")} className="px-2 w-8 items-center text-lg border border-gray-300 bg-gray-200 rounded cursor-pointer">-</button>
                                    <span className="px-2 w-8 items-center flex justify-center">{quantity}</span>
                                    <button onClick={() => handleQuantityChange("Plus")} className="px-2 w-8 items-center text-lg border border-gray-300 bg-gray-200 rounded cursor-pointer">+</button>
                                </div>
                            </div>
                            <button onClick={handleAddToCart} disabled={isbuttonDisabled} className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition w-full cursor-pointer ${isbuttonDisabled} ? "cursor-not-allowed opacity-15" : "hover:bg-gray-900"`}>
                                {isbuttonDisabled ? "Adding..." : "Add to Cart"}
                            </button>

                            <div className="mt-4">
                                <p className="text-gray-700 mb-2">Characteristics:</p>
                                <table className="w-full text-sm text-left border border-gray-300">
                                    <tbody>
                                        <tr>
                                            <td className="py-1 border border-gray-300 p-2 font-bold text-sm">Brand</td>
                                            <td className="py-1 border border-gray-300 p-2 text-sm">{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 border border-gray-300 p-2 font-bold text-sm">Material</td>
                                            <td className="py-1 border border-gray-300 p-2 text-sm">{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="mt-15">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 text-center">You May Also Like</h2>
                    </div>
                    <div className="mt-15">
                        <ProductGrid products={similarProducts} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;