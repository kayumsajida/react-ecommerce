import { CiCreditCard1 } from "react-icons/ci";
import { HiArrowCircleDown } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";

const FeatureSection = () => {
  return (
    <>
      <section className="py-16 px-3 lg:px-0">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
                 <LuShoppingCart className="text-xl mb-2" />
                 <h4 className="tracking-tighter mb-2">Free International Shipping</h4>
                <p className="text-sm text-gray-600 tracking-tighter">
                    On all orders over $100.
                </p>
            </div>
            <div className="flex flex-col items-center p-4">
                 <HiArrowCircleDown className="text-xl mb-2" />
                 <h4 className="tracking-tighter mb-2">45 Days Return Policy</h4>
                <p className="text-sm text-gray-600 tracking-tighter">
                    Money back guarantee
                </p>
            </div>
            <div className="flex flex-col items-center p-4">
                 <CiCreditCard1 className="text-xl mb-2" />
                 <h4 className="tracking-tighter mb-2">Secure Checkout</h4>
                <p className="text-sm text-gray-600 tracking-tighter">
                    100% secure payment process
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;