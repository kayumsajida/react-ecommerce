import { Link } from "react-router-dom";
import herobanner from "../../assets/images/hero.webp";
const Hero = () => {
    return (
        <>
            <section className="relative">
                <img src={herobanner} className="w-full object-cover h-[400px] md:h-[600px] lg:md:h-[750px]" alt="Ecommerce" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                        <h1 className="text-4xl md:text-8xl tracking-tighter uppercase font-bold drop-shadow-lg">
                            Vacation <br/> Ready
                        </h1>
                        <p className="text-sm md:text-lg mb-6 drop-shadow-lg">
                            Explore our vaction-ready outfits with fast worldwide shipping.
                        </p>
                        <Link to="#" className="bg-white text-gray-950 px-3 rounded-sm text-lg p-2 transition duration-300">Shop Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;