import React from "react";

const ProductCatalogs = () => {
  const catalogs = [
    {
      image:
        "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=800&q=80",
      title: "Textiles",
      description: "High-quality cotton, silk, and linen",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      title: "Handicrafts",
      description: "Unique designs from local artisans",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=800&q=80",
      title: "Spices",
      description: "Rich flavors and aromas",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-[Outfit]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Product Catalogs
      </h2>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {catalogs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden  hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 rounded-lg object-cover"
            />

            {/* Content */}
            <div className=" py-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalogs;
