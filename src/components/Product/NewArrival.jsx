const NewArrival = () => {
    const newArrivalProducts = [
        {
            _id: 1,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=1",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 2,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=2",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 3,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=3",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 4,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=4",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 5,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=5",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 6,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=6",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 7,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=7",
                    altText: "Stylist Jacket"
                },
            ]
        },
        {
            _id: 8,
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500/random=8",
                    altText: "Stylist Jacket"
                },
            ]
        },
    ]
  return (
    <>
      <section className="">
        <div className="container mx-auto text-center mb-10 relative px-3 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">New Arrival</h2>
            <p className="text-gray-500 text-sm md:text-base">
                Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
            </p>
        </div>
      </section>
    </>
  );
};

export default NewArrival;