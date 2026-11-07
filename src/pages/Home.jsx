import Hero from "../components/Layout/Hero";
import GendarCollection from "../components/Product/GendarCollection";
import NewArrival from "../components/Product/NewArrival";
import ProductDetails from "../components/Product/ProductDetails";

const Home = () => {
    return (
        <>
            <Hero/>
            <GendarCollection />
            <NewArrival />

            {/* Best seller */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">Best Sellers</h2>
            <ProductDetails />
        </>
    )
}

export default Home;