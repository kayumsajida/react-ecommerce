import { Link } from "react-router-dom";
import featuredImage from "../../assets/images/featured-collection.webp";

const FeaturedCollection = () => {
  return (
    <>
        <section className="py-16 px-3 lg:px-0">
            <div className="container mx-auto lg:px-0 flex flex-col-reverse lg:flex-row items-center bg-green-50 lg:rounded-3xl">
                <div className="lg:w-1/2 p-6 lg:p-14">
                   <h2 className="text-lg text-gray-700 mb-2">Comfort and Style</h2>
                   <h2 className="text-4xl font-bold mb-6">Apparel made for your everyday life</h2>
                   <p className="text-sm text-gray-600 mb-6">
                          Discover our collection of comfortable and stylish apparel designed to fit your lifestyle. From casual wear to activewear, we have everything you need to look and feel your best. Shop now and experience the perfect blend of fashion and function.
                   </p>
                   <Link to="/collections/all" className="bg-black text-white text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">Shop Now</Link>
                </div>
                <div className="lg:w-1/2">
                    <img src={featuredImage} alt="Featured Collection" className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl" />
                </div>
            </div>
        </section>
    </>
  );
};

export default FeaturedCollection;