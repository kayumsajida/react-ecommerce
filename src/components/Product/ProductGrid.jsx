import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <Link key={index} to={`/product/${product._id}`} className="block">
                        <div className="bg-white rounded-lg">
                            <div className="w-full h-96 mb-4 pb-6">
                                <img src={product.image[0].url} alt={product.image[0].altText || product.name} className="w-full h-full object-cover" />
                                <h3 className="text-sm mt-2 mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium tracking-tighter">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProductGrid;