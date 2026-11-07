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
  return (
    <>
      <section className="py-10">
        <div className="max-w-6xl mx-auto p-3 rounded-lg bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex flex-col space-y-4 mr-4">
                    {/* Left Thumbnails */}
                    {selectedProduct.images.map((image, index) => (
                        <img key={index} src={image.url} className="h-20 w-20 object-cover cursor-pointer rounded-lg" alt={image.altText || `Thumbnail ${index}`} />
                    ))}                    
                </div>
                {/* main product image */}
                <div className="md:w-1/2">
                    <div className="mb-4">
                        <img src={selectedProduct.images[0].url} className="w-full h-auto object-cover rounded-lg" alt="Main Product" />
                    </div>
                </div>
                <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
                    {/* Left Thumbnails */}
                    {selectedProduct.images.map((image, index) => (
                        <img key={index} src={image.url} className="h-20 w-20 object-cover cursor-pointer rounded-lg border" alt={image.altText || `Thumbnail ${index}`} />
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
                                <div key={index} className="w-8 h-8 rounded-full border cursor-pointer" style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.8)", }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700 mb-2">Size:</p>
                        <div className="flex gap-2">
                            {selectedProduct.sizes.map((size, index) => (
                                <button key={index} className="w-8 h-8 items-center text-sm border rounded cursor-pointer">{size}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700 mb-2">Quantity:</p>
                        <div className="flex gap-2">
                            <button className="px-2 w-8 items-center text-lg border border-gray-300 bg-gray-200 rounded cursor-pointer">-</button>
                            <span className="px-2 w-8 items-center flex justify-center">1</span>
                            <button className="px-2 w-8 items-center text-lg border border-gray-300 bg-gray-200 rounded cursor-pointer">+</button>
                        </div>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full cursor-pointer uppercase">Add to Cart</button>

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
        </div>
      </section>
    </>
  );
};

export default ProductDetails;