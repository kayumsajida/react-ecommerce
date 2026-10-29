import { FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6";

const Topbar = () => {
    return (
        <>
        <div className="bg-primary text-white">
            <div className="container mx-auto flex items-center justify-between py-2 px-3">
                <div className="hidden md:flex items-center space-x-2">
                    <a href="#" className="hover:text-gray-300 duration-300 text-xs">
                        <FaMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300 duration-300 text-xs">
                        <FaInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300 duration-300 text-xs">
                        <FaXTwitter className="h-4 w-4" />
                    </a>
                </div>
                <div className="text-xs text-center grow">
                    <span>We ship worldwide - Fast and reliable shipping!</span>
                </div>
                <div className="text-xs hidden md:block text-white">
                    <a href="tel:12348908778">(+1) 12348908778</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Topbar;