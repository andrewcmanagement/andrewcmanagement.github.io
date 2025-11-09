import React from "react";

export default function AndrewCManagementSite() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 shadow-sm">
        <div className="flex items-center space-x-3">
          {/* Professional Logo (Monogram Style) */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-900"
          >
            <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="6" fill="none" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="48"
              fontFamily="serif"
              fill="currentColor"
            >
              AC
            </text>
          </svg>
          <span className="text-xl font-semibold tracking-wide">
            Andrew C Management
          </span>
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:text-gray-500">Home</a>
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#services" className="hover:text-gray-500">Services</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-8 py-40 text-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501183638710-841dd1904471')" }}>
        <div className="bg-white/70 backdrop-blur-sm max-w-2xl mx-auto p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-semibold mb-4 tracking-tight">
            Residential Property Management in San Francisco
          </h1>
          <p className="text-lg text-gray-700">
            Professional, minimal, and reliable property management, consulting, and maintenance services you can trust.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          Andrew C Management is a San Francisco–based residential property management company committed to providing seamless and trustworthy services. We combine local insight with a professional, minimal approach to ensure your investments are maintained with care and expertise.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-sm bg-cover bg-center h-48 flex flex-col justify-end text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2')" }}>
              <h3 className="text-lg font-semibold mb-1 drop-shadow-lg">Property Management</h3>
              <p className="text-sm drop-shadow-lg">Full-service residential management, tenant communication, rent collection, and oversight.</p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm bg-cover bg-center h-48 flex flex-col justify-end text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')" }}>
              <h3 className="text-lg font-semibold mb-1 drop-shadow-lg">Consulting</h3>
              <p className="text-sm drop-shadow-lg">Expert guidance on property investment, compliance, and long-term planning.</p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm bg-cover bg-center h-48 flex flex-col justify-end text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586105251261-72a756497a11')" }}>
              <h3 className="text-lg font-semibold mb-1 drop-shadow-lg">Property Care & Maintenance</h3>
              <p className="text-sm drop-shadow-lg">Reliable maintenance coordination, inspections, and preventative care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-600 mb-4">
          Have a property or project in mind? Reach out and we’ll get back to you.
        </p>

        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-xl"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-xl"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border p-3 rounded-xl"
          />
          <button className="bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Andrew C Management. All rights reserved.
      </footer>
    </div>
  );
}
