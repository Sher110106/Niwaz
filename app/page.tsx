import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  description:
    'Resham & Thread - Where ancient embroidery art meets contemporary design. Every piece hand-embroidered, fully customizable.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#EDE6DF] to-[#e5dcd3]">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#547B6F] px-4 py-1.5 text-sm font-medium text-white">
            ✨ Hand Embroidered Excellence
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-[#212121] md:text-7xl lg:text-8xl">
            Every Piece.
            <br />
            <span className="text-[#BD7263]">Hand Embroidered.</span>
            <br />
            Customizable to You.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-[#212121]/70 md:text-xl">
            Discover the artistry of traditional craftsmanship, where skilled artisans breathe life
            into fabric with needle and thread.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/search"
              className="rounded-full bg-[#BD7263] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#a86355] hover:shadow-xl"
            >
              Shop Collection
            </Link>
            <Link
              href="/custom"
              className="rounded-full border-2 border-[#547B6F] bg-white px-8 py-4 text-lg font-semibold text-[#547B6F] transition-all hover:bg-[#547B6F] hover:text-white"
            >
              Create Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
              Our Collections
            </h2>
            <p className="text-lg text-[#212121]/70">
              Curated with love, crafted with precision
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Lehengas */}
            <Link href="/search/lehengas" className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#f5e6e0] to-[#e8d5ce]">
                <div className="flex h-full items-center justify-center text-6xl">👘</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all group-hover:from-black/70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 inline-block rounded-full bg-[#547B6F] px-3 py-1 text-xs font-medium">
                  Custom Available
                </div>
                <h3 className="font-serif text-2xl font-bold">Lehengas</h3>
                <p className="text-sm text-white/90">Regal ensembles for grand occasions</p>
              </div>
            </Link>

            {/* Suits & Kurtas */}
            <Link href="/search/suits" className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#e8f0ed] to-[#d4e5df]">
                <div className="flex h-full items-center justify-center text-6xl">🧥</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all group-hover:from-black/70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 inline-block rounded-full bg-[#547B6F] px-3 py-1 text-xs font-medium">
                  Custom Available
                </div>
                <h3 className="font-serif text-2xl font-bold">Suits & Kurtas</h3>
                <p className="text-sm text-white/90">Everyday elegance, masterfully crafted</p>
              </div>
            </Link>

            {/* Dupattas & Stoles */}
            <Link href="/search/dupattas" className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#f0e8ed] to-[#e3d5df]">
                <div className="flex h-full items-center justify-center text-6xl">🧣</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all group-hover:from-black/70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 inline-block rounded-full bg-[#547B6F] px-3 py-1 text-xs font-medium">
                  Custom Available
                </div>
                <h3 className="font-serif text-2xl font-bold">Dupattas & Stoles</h3>
                <p className="text-sm text-white/90">The finishing touch to every outfit</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Embroidery */}
      <section className="bg-[#EDE6DF] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
                The Art of
                <span className="block text-[#BD7263]">Hand Embroidery</span>
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-[#212121]/80">
                Each piece is a labor of love, created by skilled artisans who have honed their
                craft over generations. Every stitch tells a story, every thread holds tradition.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-[#212121]/80">
                We preserve the ancient techniques while embracing contemporary aesthetics, creating
                timeless pieces that celebrate both heritage and modernity.
              </p>
              <Link
                href="/our-craft"
                className="inline-flex items-center gap-2 text-[#547B6F] hover:underline"
              >
                <span className="font-semibold">Discover Our Process</span>
                <span>→</span>
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5e6e0] to-[#e8d5ce] shadow-xl">
              <div className="flex h-full items-center justify-center text-9xl">🪡</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Banner */}
      <section className="bg-gradient-to-r from-[#547B6F] to-[#456b5f] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Dream It, We Stitch It
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Want something truly unique? Our artisans can bring your vision to life with custom
            embroidery, personalized designs, and bespoke creations.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=I%20want%20a%20custom%20design"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
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
                className="rounded-2xl border border-[#ECECEC] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex gap-1 text-[#BD7263]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-[#212121]/80">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#212121]">{testimonial.name}</p>
                  <span className="rounded-full bg-[#EDE6DF] px-3 py-1 text-xs font-medium text-[#212121]">
                    {testimonial.occasion}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
