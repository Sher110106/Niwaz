import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  description:
    'NIWAZ - Where ancient embroidery art meets contemporary design. Every piece hand-embroidered, fully customizable.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#EDE6DF] via-[#f0e8e8] to-[#e5dcd3]">
        {/* Subtle embroidery pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BD7263' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-[#547B6F]/5 animate-pulse"></div>
        <div className="absolute top-40 right-20 h-16 w-16 rounded-full bg-[#BD7263]/5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 h-12 w-12 rounded-full bg-[#547B6F]/5 animate-pulse delay-2000"></div>
        
          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#547B6F] px-3 py-1.5 text-xs font-medium text-white shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white sm:h-2 sm:w-2"></span>
                  Hand Embroidered Excellence Since 2018
                </div>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <h1 className="font-serif text-3xl font-bold leading-tight text-[#212121] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Where Tradition
                  <br />
                  <span className="text-[#BD7263]">Meets Artistry</span>
                </h1>
                
                <p className="text-base leading-relaxed text-[#212121]/80 sm:text-lg lg:text-xl">
                  Every stitch tells a story. Every thread carries heritage. 
                  <span className="font-semibold text-[#BD7263]">NIWAZ</span> brings you 
                  hand-embroidered masterpieces crafted by skilled artisans who have 
                  preserved these ancient techniques for generations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 sm:gap-6">
                <div className="text-center">
                  <div className="font-serif text-xl font-bold text-[#BD7263] sm:text-2xl">500+</div>
                  <div className="text-xs text-[#212121]/70 sm:text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-xl font-bold text-[#BD7263] sm:text-2xl">15+</div>
                  <div className="text-xs text-[#212121]/70 sm:text-sm">Skilled Artisans</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-xl font-bold text-[#BD7263] sm:text-2xl">100%</div>
                  <div className="text-xs text-[#212121]/70 sm:text-sm">Hand Embroidered</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/search"
                  className="group rounded-full bg-[#BD7263] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#a86355] hover:shadow-xl hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Collection
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/custom"
                  className="group rounded-full border-2 border-[#547B6F] bg-white px-6 py-3 text-base font-semibold text-[#547B6F] transition-all duration-300 hover:bg-[#547B6F] hover:text-white hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Custom Design
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Images */}
            <div className="relative flex items-center justify-center lg:order-first">
              <div className="relative h-[300px] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl sm:h-[400px] lg:h-[500px] lg:max-w-md">
                {/* Main Hero Image */}
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/Gemini_Generated_Image_kyuxlwkyuxlwkyux.png"
                    alt="Beautiful hand-embroidered coral outfit with gold and silver embellishments"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Image overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-[#547B6F]/10 sm:-top-4 sm:-right-4 sm:h-20 sm:w-20"></div>
                <div className="absolute -bottom-2 -left-2 h-10 w-10 rounded-full bg-[#BD7263]/10 sm:-bottom-4 sm:-left-4 sm:h-16 sm:w-16"></div>
                
                {/* Image gallery indicators */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white/80"></div>
                  <div className="h-2 w-2 rounded-full bg-white/40"></div>
                  <div className="h-2 w-2 rounded-full bg-white/40"></div>
                  <div className="h-2 w-2 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center sm:mb-8 lg:mb-12">
            <h2 className="mb-2 font-serif text-2xl font-bold text-[#212121] sm:mb-3 sm:text-3xl lg:text-4xl xl:text-5xl">
              Our Collections
            </h2>
            <p className="text-sm text-[#212121]/70 sm:text-base lg:text-lg">
              Curated with love, crafted with precision
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
            {/* Lehengas */}
            <Link href="/search" className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/Gemini_Generated_Image_z3276gz3276gz327.png"
                  alt="Elegant royal blue salwar kameez with intricate gold and pearl embroidery"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6 lg:p-8">
                <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#547B6F] px-3 py-1.5 text-xs font-medium shadow-lg">
                  <span>✨</span> Custom Available
                </div>
                <h3 className="font-serif text-xl font-bold transition-all duration-300 group-hover:translate-y-[-2px] sm:text-2xl lg:text-3xl">Lehengas</h3>
                <p className="text-sm text-white/90 transition-all duration-300 group-hover:translate-y-[-2px] sm:text-base">Regal ensembles for grand occasions</p>
              </div>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#BD7263]/10 to-[#547B6F]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>

            {/* Suits & Kurtas */}
            <Link href="/search" className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/Gemini_Generated_Image_98vxea98vxea98vx (1).png"
                  alt="Rich maroon fabric with intricate teal and gold embroidery"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6 lg:p-8">
                <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#547B6F] px-3 py-1.5 text-xs font-medium shadow-lg">
                  <span>✨</span> Custom Available
                </div>
                <h3 className="font-serif text-xl font-bold transition-all duration-300 group-hover:translate-y-[-2px] sm:text-2xl lg:text-3xl">Suits & Kurtas</h3>
                <p className="text-sm text-white/90 transition-all duration-300 group-hover:translate-y-[-2px] sm:text-base">Everyday elegance, masterfully crafted</p>
              </div>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#BD7263]/10 to-[#547B6F]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>

            {/* Dupattas & Stoles */}
            <Link href="/search" className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/Gemini_Generated_Image_kyuxlwkyuxlwkyux.png"
                  alt="Beautiful coral dupatta with gold border and tassels"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6 lg:p-8">
                <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#547B6F] px-3 py-1.5 text-xs font-medium shadow-lg">
                  <span>✨</span> Custom Available
                </div>
                <h3 className="font-serif text-xl font-bold transition-all duration-300 group-hover:translate-y-[-2px] sm:text-2xl lg:text-3xl">Dupattas & Stoles</h3>
                <p className="text-sm text-white/90 transition-all duration-300 group-hover:translate-y-[-2px] sm:text-base">The finishing touch to every outfit</p>
              </div>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#BD7263]/10 to-[#547B6F]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Embroidery */}
      <section className="bg-[#EDE6DF] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#212121] sm:text-4xl lg:text-5xl">
                The Art of
                <span className="block text-[#BD7263]">Hand Embroidery</span>
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#212121]/80 sm:text-lg">
                Each piece is a labor of love, created by skilled artisans who have honed their
                craft over generations. Every stitch tells a story, every thread holds tradition.
              </p>
              <p className="mb-6 text-base leading-relaxed text-[#212121]/80 sm:text-lg">
                We preserve the ancient techniques while embracing contemporary aesthetics, creating
                timeless pieces that celebrate both heritage and modernity.
              </p>
              <Link
                href="/our-craft"
                className="inline-flex items-center gap-2 text-[#547B6F] transition-colors hover:text-[#BD7263] hover:underline"
              >
                <span className="font-semibold">Discover Our Process</span>
                <span className="transition-transform duration-300 hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="order-1 relative h-[300px] overflow-hidden rounded-xl shadow-xl sm:h-[400px] lg:order-2 lg:h-[400px]">
              <img
                src="/Gemini_Generated_Image_ukhq85ukhq85ukhq.png"
                alt="Intricate peacock and floral embroidery on traditional Indian kurta"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5e6e0]/20 to-[#e8d5ce]/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Banner */}
      <section className="bg-gradient-to-r from-[#547B6F] to-[#456b5f] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-3 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Dream It, We Stitch It
          </h2>
          <p className="mb-6 text-base text-white/90 sm:mb-8 sm:text-lg">
            Want something truly unique? Our artisans can bring your vision to life with custom
            embroidery, personalized designs, and bespoke creations.
          </p>
          <a
            href="https://wa.me/918708491362?text=I%20want%20a%20custom%20design"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-3 font-serif text-3xl font-bold text-[#212121] sm:text-4xl lg:text-5xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Priya S.',
                text: 'The attention to detail is incredible. My custom lehenga was exactly what I dreamed of!',
                occasion: 'Wedding'
              },
              {
                name: 'Anjali M.',
                text: "Beautiful embroidery work. The artisans' skill really shines through in every piece.",
                occasion: 'Festival'
              },
              {
                name: 'Kavya R.',
                text: 'Loved the personalized service on WhatsApp. They helped me choose the perfect design!',
                occasion: 'Reception'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 sm:p-8"
              >
                {/* Decorative quote mark */}
                <div className="absolute -top-2 -left-2 text-4xl text-[#BD7263]/20 font-serif">"</div>
                
                <div className="mb-4 flex gap-1 text-[#BD7263]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-[#212121]/80 leading-relaxed transition-all duration-300 group-hover:text-[#212121]">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#212121] transition-all duration-300 group-hover:text-[#BD7263]">{testimonial.name}</p>
                    <p className="text-xs text-[#212121]/60">Verified Customer</p>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-[#EDE6DF] to-[#f0e8e8] px-4 py-2 text-xs font-medium text-[#212121] shadow-sm transition-all duration-300 group-hover:shadow-md">
                    {testimonial.occasion}
                  </span>
                </div>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#BD7263]/5 to-[#547B6F]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
