import Link from 'next/link';

export const metadata = {
  title: 'Collections - Niwaz',
  description: 'Explore our hand-embroidered ethnicwear collections including lehengas, suits, and dupattas crafted by skilled artisans.'
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#EDE6DF]">
      {/* Collections Header */}
      <div className="bg-white border-b border-[#ECECEC]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-medium text-[#212121] sm:text-5xl lg:text-6xl">
              Our Collections
            </h1>
            <p className="mt-4 text-lg text-[#212121]/70 max-w-2xl mx-auto">
              Discover our exquisite hand-embroidered ethnicwear, each piece crafted with love and precision by skilled artisans across India.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className="inline-flex items-center rounded-full bg-[#547B6F] px-4 py-2 text-sm font-medium text-white">
                ✨ Hand Embroidered
              </span>
              <span className="inline-flex items-center rounded-full border border-[#547B6F] px-4 py-2 text-sm font-medium text-[#547B6F]">
                🎨 Custom Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {/* Lehengas Collection */}
          <Link href="/search" className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/Gemini_Generated_Image_z3276gz3276gz327.png"
                alt="Elegant royal blue salwar kameez with intricate gold and pearl embroidery"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/85"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white">
              <div className="mb-2 sm:mb-3 inline-flex items-center gap-1 rounded-full bg-[#547B6F] px-2.5 py-1 text-xs font-medium shadow-lg sm:px-3 sm:py-1.5">
                <span>✨</span> Custom Available
              </div>
              <h3 className="font-serif text-lg font-bold transition-all duration-300 group-hover:translate-y-[-1px] sm:text-xl lg:text-2xl">Lehengas</h3>
              <p className="text-xs text-white/90 transition-all duration-300 group-hover:translate-y-[-1px] sm:text-sm">Regal ensembles for special occasions</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#BD7263]/10 to-[#547B6F]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </Link>

          {/* Suits Collection */}
          <Link href="/search" className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/Gemini_Generated_Image_98vxea98vxea98vx (1).png"
                alt="Rich maroon fabric with intricate teal and gold embroidery"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/85"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white">
              <div className="mb-2 sm:mb-3 inline-flex items-center gap-1 rounded-full bg-[#547B6F] px-2.5 py-1 text-xs font-medium shadow-lg sm:px-3 sm:py-1.5">
                <span>✨</span> Custom Available
              </div>
              <h3 className="font-serif text-lg font-bold transition-all duration-300 group-hover:translate-y-[-1px] sm:text-xl lg:text-2xl">Suits & Kurtas</h3>
              <p className="text-xs text-white/90 transition-all duration-300 group-hover:translate-y-[-1px] sm:text-sm">Everyday elegance, masterfully crafted</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#BD7263]/10 to-[#547B6F]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </Link>

          {/* Dupattas Collection */}
          <Link href="/search" className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 sm:col-span-2 xl:col-span-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/Gemini_Generated_Image_kyuxlwkyuxlwkyux.png"
                alt="Beautiful coral dupatta with gold border and tassels"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/85"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white">
              <div className="mb-2 sm:mb-3 inline-flex items-center gap-1 rounded-full bg-[#547B6F] px-2.5 py-1 text-xs font-medium shadow-lg sm:px-3 sm:py-1.5">
                <span>✨</span> Custom Available
              </div>
              <h3 className="font-serif text-lg font-bold transition-all duration-300 group-hover:translate-y-[-1px] sm:text-xl lg:text-2xl">Dupattas & Stoles</h3>
              <p className="text-xs text-white/90 transition-all duration-300 group-hover:translate-y-[-1px] sm:text-sm">Elegant accessories to complete your look</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#BD7263]/10 to-[#547B6F]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </Link>
        </div>

        {/* Custom Orders CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <h2 className="font-serif text-xl font-bold text-[#212121] sm:text-2xl lg:text-3xl">
              Don't see what you're looking for?
            </h2>
            <p className="mt-3 text-sm text-[#212121]/70 sm:text-base lg:text-lg">
              We create custom designs tailored to your preferences. Let our artisans bring your vision to life.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href="/custom"
                className="group inline-flex items-center gap-2 rounded-full bg-[#BD7263] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#a86355] hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
              >
                Create Custom Design
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
