import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaClock, FaTruck, FaHeadset } from "react-icons/fa";
import { useAuth } from "../../Authcontext/AuthContext";
import FAQSection from "../Faqs/FAQSection";
import HomeCleaningBookingForm from "../Booknow/HomeCleaningBookingForm";
import VehicleCleaningBookingForm from "../Booknow/VehicleCleaningBookingForm";


export default function Home() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const services = [
    {
      icon: "🮺",
      label: "Laundry",
      subservices: ["Washing", "Drying", "Ironing"],
      route: "/book",
    },
    {
      icon: "🏠",
      label: "Home Cleaning",
      subservices: ["Kitchen Cleaning", "Bathroom Cleaning", "Bedroom Cleaning","Living Room"],
      route: "/book-home-cleaning",
    },
    {
      icon: "🚗",
      label: "Car Cleaning",
      subservices: ["Interior Vacuum", "Exterior Wash"],
      route: "/book-vehicle-cleaning",
    },
  ];

  const handleItemClick = (label) => {
    setSelectedItem(label === selectedItem ? null : label);
  };

  const handleBooking = (route) => {
    navigate(route);
  };

  const handleBookNowClick = () => {
    isLoggedIn ? navigate("/book") : navigate("/login");
  };

  return (
    <div className="w-full px-4 py-4 sm:px-6 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl shadow-lg bg-white mb-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Welcome to <span className="text-orange-600">Laundry Services</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Convenient, reliable, and professional laundry care delivered at your doorstep.
            </p>
            <button
              onClick={handleBookNowClick}
              className="mt-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
            >
              Book Now
            </button>
            <p className="mt-4 text-md text-gray-500">
              Book your laundry today and experience hassle-free cleaning!
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl">📦</span>
                <p className="text-gray-700">
                  Schedule Collection Days, <strong>24-48 hours Delivery</strong>.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl">💳</span>
                <p className="text-gray-700">
                  Easy Payment Options, <strong>Dedicated Customer Support</strong>.
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src="/laundry-image2.webp"
              alt="Laundry"
              className="h-[460px] w-full object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white rounded-3xl shadow-md px-6 py-10 mb-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose <span className="text-orange-600">Laundry Services?</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
          We provide high-quality, fast, and affordable laundry services with eco-friendly solutions. Your satisfaction is our priority.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🌿", title: "Eco-Friendly", text: "Using environmentally safe detergents and processes." },
            { icon: "⚡", title: "Fast Service", text: "Quick turnaround times without compromising quality." },
            { icon: "💰", title: "Affordable", text: "Competitive pricing for premium laundry services." },
          ].map((feature, i) => (
            <div key={i} className="p-5 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book Prompt */}
      <div className="mt-5 flex flex-col items-center text-center">
        <p className="mb-3 text-lg text-gray-700">Schedule your pickup now</p>
        <Link
          to="/book"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
        >
          Book Now
        </Link>
      </div>

      {/* Our Services
      <div className="max-w-7xl mx-auto mt-10 px-4 py-20 bg-gradient-to-br from-orange-50 to-white rounded-xl">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-4">
          Our Services
        </h2>
        <div className="mx-auto h-1 w-20 bg-orange-500 rounded mb-12" />

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item.label)}
              className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{item.label}</div>

              {selectedItem === item.label && (
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  {item.subservices.map((sub, i) => (
                    <div key={i} className="bg-orange-100 px-2 py-1 rounded">
                      {sub}
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBooking(item.route);
                }}
                className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div> */}
<div className="max-w-7xl mx-auto mt-10 px-4 py-20 bg-gradient-to-br from-orange-50 to-white rounded-xl">
  <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-4">
    Our Services
  </h2>
  <div className="mx-auto h-1 w-20 bg-orange-500 rounded mb-12" />

  <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
    {services.map((item, index) => (
      <div
        key={index}
        onClick={() => handleItemClick(item.label)}
        className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border hover:-translate-y-1"
      >
        <div className="text-5xl mb-4">{item.icon}</div>
        <div className="text-lg font-semibold text-gray-800 mb-2">{item.label}</div>

        {selectedItem === item.label && (
          <div className="mt-3 space-y-1 text-sm text-gray-700">
            {item.subservices.map((sub, i) => (
              <div key={i} className="bg-orange-100 px-2 py-1 rounded">
                {sub}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBooking(item.route);
          }}
          className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm"
        >
          Book Now
        </button>
      </div>
    ))}
  </div>

  {/* Conditional Rendering of Forms */}
  <div className="mt-16">
    {selectedItem === "Home Cleaning" && <HomeCleaningBookingForm />}
    {selectedItem === "Vehicle Cleaning" && <VehicleCleaningBookingForm />}
  </div>
</div>


      {/* Cleaning With Care Section */}
      <section className="bg-gray-50 py-12 px-4 mt-16 mb-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Cleaning with Care: Our Laundry and Dry Cleaning Protocol
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <FeatureCard icon={<FaClock />} title="24h turnaround time" desc="Get your laundry back in just 24 hours!" />
            <FeatureCard icon={<FaTruck />} title="Free collection and delivery" desc="We pick up and deliver your clothes for free." />
            <FeatureCard icon={<FaHeadset />} title="Dedicated 24/7 support" desc="We’re here for you anytime, day or night." />
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
    <div className="text-4xl text-orange-500 mb-4">{icon}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);
