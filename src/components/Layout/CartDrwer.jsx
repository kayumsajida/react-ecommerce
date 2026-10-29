import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({cartdrweropen, toogleDrawerCart}) => {
    return (
        <>
            <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${cartdrweropen ? "translate-x-0" : "translate-x-full"}`}>
               <button onClick={toogleDrawerCart} className="flex justify-end pt-3 px-3 cursor-pointer">
                 <IoIosClose className="h-6 w-6 text-gray-600" />
               </button>
               <div className="grow p-4 overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
                    {/* cart content */}
                    <CartContent />
               </div>
               <div className="p-4 bg-white sticky bottom-0">
                    <button className="bg-black text-white text-sm w-full py-2 hover:bg-gray-800 transition cursor-pointer">Checkout</button>
                    <p className="text-xs tracking-tighter mt-2 text-center text-gray-500">
                        Shipping, taxes, and discount code calculated at checkout.
                    </p>
               </div>
            </div>
        </>
    )
}

export default CartDrawer;