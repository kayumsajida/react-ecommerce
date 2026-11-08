import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Product/FeaturedCollection";
import FeatureSection from "../components/Product/FeatureSection";
import GendarCollection from "../components/Product/GendarCollection";
import NewArrival from "../components/Product/NewArrival";
import ProductDetails from "../components/Product/ProductDetails";
import ProductGrid from "../components/Product/ProductGrid";
const placeholderProducts = [
    {
            _id: "1",
            name: "Product 1",
            price: 100,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=1",
                    altText: "Product 1"
                }
            ]
        },
        {
            _id: "2",
            name: "Product 2",
            price: 150,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=2",
                    altText: "Product 2"
                }
            ]
        },
        {
            _id: "3",
            name: "Product 3",
            price: 200,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=3",
                    altText: "Product 3"
                }
            ]
        },
        {
            _id: "4",
            name: "Product 4",
            price: 250,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=4",
                    altText: "Product 4"
                }
            ]
        }, 
        {
            _id: "5",
            name: "Product 5",
            price: 300,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=5",
                    altText: "Product 5"
                }
            ]
        }, 
        {
            _id: "6",
            name: "Product 6",
            price: 350,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=6",
                    altText: "Product 6"
                }
            ]
        }, 
        {
            _id: "7",
            name: "Product 7",
            price: 400,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=7",
                    altText: "Product 7"
                }
            ]
        }, 
        {
            _id: "8",
            name: "Product 8",
            price: 450,
            image: [
                {
                    url: "https://picsum.photos/200/200?random=8",
                    altText: "Product 8"
                }
            ]
        }, 
];

const Home = () => {
    return (
        <>
            <Hero/>
            <GendarCollection />
            <NewArrival />

            {/* Best seller */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">Best Sellers</h2>
            <ProductDetails />
            <div className="container mx-auto px-3 lg:px-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">Top Wear for Women</h2>
                <div className="mt-15">
                    <ProductGrid products={placeholderProducts} />   
                </div>
            </div> 
            <FeaturedCollection />
            <FeatureSection />
        </>
    )
}

export default Home;