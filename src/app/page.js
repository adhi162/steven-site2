// src/app/page.jsx
export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Sthira Constructions</h1>
        <p className="text-lg mb-6">
          Building dreams with precision and excellence — from interiors to grand structures.
        </p>
        <a
          href="#services"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-green-100 transition"
        >
          Explore Services
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-green-700 text-5xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold mb-3">Construction</h3>
            <p className="text-gray-600">
              We specialize in high-quality construction projects with attention to every detail.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-green-700 text-5xl mb-4">🛋️</div>
            <h3 className="text-2xl font-bold mb-3">Interior Design</h3>
            <p className="text-gray-600">
              Creating stunning, functional interiors that reflect your personality and style.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-green-700 text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-3">Project Management</h3>
            <p className="text-gray-600">
              Efficiently managing your projects from start to finish, ensuring on-time delivery.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
