import { BuildingOffice2Icon, HomeModernIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

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
          <div
            className="relative bg-white p-8 rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/t7pZthpRARr1CMV1MwYIdmERU.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="relative z-10 text-white">
              <BuildingOffice2Icon className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Construction</h3>
              <p>
                We specialize in high-quality construction projects with attention to every detail.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="relative bg-white p-8 rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/gBihxAqPINrkM1rQeK1H6v7yKn8.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="relative z-10 text-white">
              <HomeModernIcon className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Interior Design</h3>
              <p>
                Creating stunning, functional interiors that reflect your personality and style.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="relative bg-white p-8 rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/GuMbEJfK623nwiSKIZ3ktdvfHI.jpg?scale-down-to=4096')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="relative z-10 text-white">
              <ClipboardDocumentCheckIcon className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Project Management</h3>
              <p>
                Efficiently managing your projects from start to finish, ensuring on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
