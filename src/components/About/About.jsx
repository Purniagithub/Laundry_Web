import React from "react";

export default function About() {
    return (
        <>
        <div className="py-16 bg-yellow-50">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/laundry image.webp"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           About Us
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Laundry Services offer convenient, professional cleaning and care for your clothes, 
                        helping you save time and effort from daily chores. 
                        These services typically include washing, drying, ironing, and folding garments, as well
                         as specialized treatments for delicate fabrics and stubborn stains. 
                         Whether you're a busy professional, a student, or a large household, laundry services
                         ensure your clothes are handled with care and returned fresh, clean, and ready to wear. 
                         With options like doorstep pickup and delivery, express service, and eco-friendly detergents,
                          modern laundry services are designed to meet the needs of every lifestyle efficiently and reliably.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Our team is a mix of young energetic business leaders and veteran 
                        industry experts working together towards the goal of making Laundry Services as the world’s No. 1 laundry player by 2026.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Mission Section */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide exceptional laundry services that exceed customer expectations, while fostering a culture of innovation, quality, and customer satisfaction.
          </p>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Our Values</h2>
          <ul className="space-y-4 text-lg list-disc list-inside">
            <li>
              <span className="font-semibold text-gray-900">Convenience:</span> We believe in making life easier for our customers.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Quality:</span> We’re committed to delivering impeccable results.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Innovation:</span> We continuously strive to improve and adapt to changing needs.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Customer Satisfaction:</span> Your happiness is our top priority.
            </li>
          </ul>
        </section>

      </div>
    </div>
        <div className="py-16 bg-white">
  <div className="container mx-auto px-6 text-gray-700">
    {/* Section Title */}
    <h3 className="text-3xl md:text-4xl text-center text-gray-900 tracking-tight leading-tight">
      The Visionaries
    </h3>
    <div className="mx-auto mt-3 h-1 w-16 bg-orange-500 rounded"></div>

    {/* Co-Founders Grid */}
    <div className="mt-12 grid gap-12 md:grid-cols-2">
      {/* Gaurav Nigam Card */}
      <div className="p-6 rounded-lg shadow-md border text-center">
        <img
          src="/co-founder.jpeg"
          alt="Gaurav Nigam"
          className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-900">
          Gaurav Nigam
          <span className="block text-blue-600 text-sm font-medium">Co-Founder</span>
        </h4>
        <p className="mt-4 text-gray-600 text-left">
          Business leader with 17+ years of experience across Consumer Durables and Telecom industries.
          Gaurav Nigam has served as Product Head and Customer Service Head in reputed organizations like <strong>LAVA</strong> and <strong>Airtel</strong>.
        </p>
      </div>

      {/* Navin Chawla Card */}
      <div className="p-6 rounded-lg shadow-md border text-center">
        <img
          src="/co-founder.jpeg"
          alt="Navin Chawla"
          className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-900">
          Navin Chawla
          <span className="block text-blue-600 text-sm font-medium">Co-Founder</span>
        </h4>
        <p className="mt-4 text-gray-600 text-left">
          Veteran leader with 25+ years of experience across Consumer Durables, Telecom, and FMCG industries.
          Navin Chawla has served in various senior leadership roles including COO, Product Head, and Business Head at reputed organizations such as <strong>Airtel</strong>, <strong>Britannia</strong>, <strong>Reliance</strong>, and <strong>LAVA</strong>.
        </p>
      </div>
    </div>
  </div>
</div>



        </>
    );
}