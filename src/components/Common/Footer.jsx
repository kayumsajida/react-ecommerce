import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FaMeta } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="border-t border-gray-100 py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-3">
                    <div>
                        <h2 className="text-lg text-gray-800 mb-4">Newsletter</h2>
                        <p className="text-gray-500 mb-3 text-sm">
                            Be the first to hear about new products, exclusive events, and online offers.
                        </p>
                        <p className="text-sm font-medium mb-4">
                            Sign up and get 10% off your first order.
                        </p>
                        {/* Newsletter form */}
                        <form className="flex mt-2">
                            <input type="text" className="w-full border-t border-b border-l rounded py-2 px-3 border-gray-200 transition duration-300 focus:outline-none focus-ring-2 focus:right-gray-500 placeholder:text-sm" placeholder="Enter your email" required />
                            <button type="submit" className="bg-black text-white text-sm px-2 cursor-pointer transition rounded-r-md hover:bg-gray-700">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Shop</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">Men's Top Wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">Women's Top Wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">Men's bottom Wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">Women's bottom Wear</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Shop</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">FAQs</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition-colors">Features</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Shop</h3>
                        <div className="flex items-center gap-3 mb-4">
                            <Link to="https://www.facebook.com/" className="hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <FaMeta className="h-5 w-5" />
                            </Link>
                            <Link to="https://www.facebook.com/" className="hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX className="h-4 w-4" />
                            </Link>
                            <Link to="https://www.facebook.com/" className="hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <CiYoutube className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-md text-gray-600 mb-2">Call Us</p>
                        <p className="text-sm">
                            <IoIosCall className="h-5 w-5 mr-1 inline-block" />
                            0123-456-789
                        </p>
                    </div>
                </div>
                <div className="container mx-auto mt-12 pt-4 border-t border-gray-200">
                    <p className="text-gray-400 mb-0 text-sm text-center font-normal">
                        &copy; 2026, Ecommerce. All Right Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;