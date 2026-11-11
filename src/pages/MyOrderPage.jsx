import { useEffect, useState } from "react";

const MyOrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "123 Main St",
                        city: "New York",
                        country: "USA",
                    },
                    orderitem: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/200/300?random=1",
                        }
                    ],
                    totalPrice: 20,
                    isPaid: true,
                },
                {
                    _id: "67890",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "456 Oak Ave",
                        city: "Los Angeles",
                        country: "USA",
                    },
                    orderitem: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/200/300?random=2",
                        }
                    ],
                    quantity: 1,
                    totalPrice: 15,
                    isPaid: false,
                }
            ];
            setOrders(mockOrders);
        }, 1000);
    }, []);


    return (
        <>
            <div className="w-full mx-auto">
                <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                <div className="relative overflow-hidden">
                    <table className="w-full border border-gray-300 text-sm text-left">
                        <thead className="bg-gray-100"></thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Shipping Address</th>
                            <th className="border border-gray-300 px-4 py-2">Total Price</th>
                            <th className="border border-gray-300 px-4 py-2">Is Paid</th>
                        </tr>
                        <tbody>
                            {orders.length === 0 ? (
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <img src={order.orderitem[0].image} alt={order.orderitem[0].name} className="w-10 h-10 object-cover" />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                                        <td className="border border-gray-300 px-4 py-2">{new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}</td>
                                        <td className="border border-gray-300 px-4 py-2">{order.shippingAddress.street ? `${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.country}` : 'N/A'}</td>
                                        <td className="border border-gray-300 px-4 py-2">${order.totalPrice.toFixed(2)}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <span className={order.isPaid ? "bg-green-100 text-green-800 px-2 py-1 rounded text-xs" : "bg-red-100 text-red-800 px-2 py-1 rounded text-xs"}>
                                                {order.isPaid ? "Paid" : "Pending"}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                <tr>
                                    <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">
                                        You have no orders
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyOrderPage;