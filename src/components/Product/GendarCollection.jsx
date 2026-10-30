import { Link } from "react-router-dom";
import mencollection from "../../assets/images/men-collection.webp";
import womencollection from "../../assets/images/women-collection.webp";

const GendarCollection = () => {
    return (
        <>
            <section className="py-16 px-3">
                <div className="container mx-auto flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <img src={womencollection} className="w-full h-[700px] object-cover" alt="Women Collection" />
                        <div className="absolute bottom-8 left-8 bg-white/50 p-4 rounded">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Women's Collection</h2>
                            <Link to="/collection/all?gender=women" className="text-gray-900 underline">Shop Now</Link>
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <img src={mencollection} className="w-full h-[700px] object-cover" alt="Men Collection" />
                        <div className="absolute bottom-8 left-8 bg-white/50 p-4 rounded">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Men's Collection</h2>
                            <Link to="/collection/all?gender=men" className="text-gray-900 underline">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GendarCollection;