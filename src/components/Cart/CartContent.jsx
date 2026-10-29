import { RiDeleteBin7Line } from "react-icons/ri";

const CartContent = () => {
    const productName = [
        {
            productID: 1,
            Name: "T-shirt",
            size: "M",
            color: "Red",
            price: 15,
            quantity: 1,
            image: "https://picsum.photos/200?randow=1",
        },
        {
            productID: 2,
            Name: "T-shirt",
            size: "L",
            color: "Blue",
            price: 20,
            quantity: 1,
            image: "https://picsum.photos/200?randow=1",
        },
        {
            productID: 3,
            Name: "Jeans",
            size: "L",
            color: "Green",
            price: 15,
            quantity: 1,
            image: "https://picsum.photos/200?randow=1",
        },
    ]
    return (
        <>
            {
                productName.map((product, index) => (
                    <div key={index} className="flex items-start justify-between py-2 border-b">
                        <div className="flex items-start">
                            <img src={product.image} alt={product.Name} className="w-16 h-20 object-cover mr-3" />
                            <div className="text-sm">
                                <h2 className="font-semibold">{product.Name}</h2>
                                <p className="text-gray-500">Size: {product.size} | color: {product.color}</p>
                                <div className="flex items-center mt-2">
                                    <button className="px-2 border rounded text-sm cursor-pointer">-</button>
                                    <span className="mx-3">{product.quantity}</span>
                                    <button className="px-2 border rounded text-sm cursor-pointer">+</button>
                                </div>
                            </div>                            
                        </div>
                        <div className="flex flex-col p-2">
                            <p className="mb-1">${product.price.toLocaleString()}</p>
                            <RiDeleteBin7Line className="w-6 h-6 text-red-700 hover:text-red-800 transition cursor-pointer" />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CartContent;