import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const allServices = [
    {
      title: "Wash & Fold",
      description: "Regular laundry washed, dried, and neatly folded.",
      icon: "🧺",
      price: "₹50 / kg",
      category: "Laundry",
    },
    {
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate or formal garments.",
      icon: "🧥",
      price: "₹100 / item",
      category: "Dry Cleaning",
    },
    {
      title: "Ironing",
      description: "Wrinkle-free clothes with our expert steam pressing service.",
      icon: "🧼",
      price: "₹10 / item",
      category: "Laundry",
    },
    {
      title: "Pickup & Delivery",
      description: "Doorstep laundry collection and delivery.",
      icon: "🚚",
      price: "Free above ₹200 order",
      category: "Delivery",
    },
    {
      title: "Stain Removal",
      description: "Advanced stain removal for tough spots and delicate fabrics.",
      icon: "🧽",
      price: "Starts at ₹30",
      category: "Special",
    },
    {
      title: "Curtains & Bedding",
      description: "Bulk wash and care for curtains, bedsheets, and comforters.",
      icon: "🛏️",
      price: "₹80 / kg",
      category: "Home Care",
    },
    {
      title: "Car Cleaning",
      description: "Interior and exterior car cleaning for a spotless ride.",
      icon: "🚗",
      price: "₹499 onwards",
      category: "Cleaning",
    },
    {
      title: "Shoe Cleaning",
      description: "Professional cleaning and deodorizing of all types of shoes.",
      icon: "👟",
      price: "₹149 / pair",
      category: "Cleaning",
    },
    {
      title: "Home Cleaning",
      description: "Complete home cleaning for a fresh and healthy living space.",
      icon: "🏠",
      price: "₹999 onwards",
      category: "Cleaning",
      subcategory: "Home Cleaning",
    },
    {
      title: "Bathroom Cleaning",
      description: "Deep cleaning of toilets, sinks, tiles, and floors.",
      icon: "🛁",
      price: "₹499 onwards",
      category: "Cleaning",
      subcategory: "Home Cleaning",
    },
    {
      title: "Kitchen Cleaning",
      description: "Degreasing and disinfecting of kitchen surfaces.",
      icon: "🍳",
      price: "₹599 onwards",
      category: "Cleaning",
      subcategory: "Home Cleaning",
    },
    {
      title: "Bedroom Cleaning",
      description: "Dusting, vacuuming, and wiping of furniture & floors.",
      icon: "🛏️",
      price: "₹499 onwards",
      category: "Cleaning",
      subcategory: "Home Cleaning",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  const categories = [
    "All",
    "Laundry",
    "Dry Cleaning",
    "Delivery",
    "Special",
    "Home Care",
    "Cleaning",
  ];
  const filteredServices =
  activeCategory === "All"
    ? allServices
    : allServices.filter((s) => s.category === activeCategory);

const finalServices =
  activeCategory === "Cleaning" && activeSubcategory !== "All"
    ? filteredServices.filter((s) => s.subcategory === activeSubcategory)
    : filteredServices;


  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-4">
        Our Laundry Services
      </h2>
      <div className="mx-auto mt-2 h-1 w-16 bg-orange-400 rounded mb-10" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
              activeCategory === category
                ? "bg-orange-600 text-white"
                : "bg-white text-orange-600 border-orange-400 hover:bg-orange-100"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
          
        ))}
        {activeCategory === "Cleaning" && (
  <div className="flex flex-wrap justify-center gap-2 mb-8">
    {["All", "Home Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Bedroom Cleaning"].map((sub) => (
      <button
        key={sub}
        className={`px-3 py-1 text-sm font-medium rounded-full border transition ${
          activeSubcategory === sub
            ? "bg-orange-600 text-white"
            : "bg-white text-orange-600 border-orange-400 hover:bg-orange-100"
        }`}
        onClick={() => setActiveSubcategory(sub)}
      >
        {sub}
      </button>
    ))}
  </div>
)}

      </div>
{/* Service Cards */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {finalServices.map((service, index) => (
    <div
      key={index}
      className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold text-orange-700 mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{service.price}</p>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      </div>
      <Link
        to="/book"
        className="mt-auto inline-block text-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition"
      >
        Book Service
      </Link>
    </div>
  ))}
</div>
</div>
     
  );
}
