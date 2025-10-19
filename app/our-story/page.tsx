import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Story',
  description:
    'Learn about Resham & Thread - our journey, our artisans, and our commitment to preserving traditional embroidery craftsmanship.'
};

export default function OurStoryPage() {
  return (
    <>
      <div className="bg-[#EDE6DF]">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mb-6 inline-block rounded-full bg-[#547B6F] px-4 py-1.5 text-sm font-medium text-white">
            Our Story
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-[#212121] md:text-6xl">
            Where Tradition Meets
            <span className="block text-[#BD7263]">Contemporary Design</span>
          </h1>
          <p className="text-xl text-[#212121]/70">
            A journey of threads, needles, and timeless artistry
          </p>
        </section>

        {/* Story Content */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-[#212121]">The Beginning</h2>
              <p className="text-[#212121]/80">
                Resham & Thread was born from a simple belief: that the ancient art of hand
                embroidery deserves to thrive in the modern world. Our founder, inspired by her
                grandmother's intricate needlework, set out to create a platform where master
                artisans could showcase their exceptional skills to a global audience.
              </p>

              <h2 className="mt-12 font-serif text-3xl font-bold text-[#212121]">Our Artisans</h2>
              <p className="text-[#212121]/80">
                We work with skilled craftspeople across India, many of whom learned their craft
                from their parents and grandparents. Each artisan brings decades of experience and a
                unique perspective to their work. By partnering directly with these talented
                individuals, we ensure fair compensation and help preserve traditional techniques
                that might otherwise be lost.
              </p>

              <h2 className="mt-12 font-serif text-3xl font-bold text-[#212121]">
                Our Commitment
              </h2>
              <p className="text-[#212121]/80">
                Every piece in our collection is made to order, reducing waste and ensuring that
                each garment is created with intention. We believe in slow fashion - taking the time
                to create something truly special rather than mass-producing disposable clothing.
              </p>

              <p className="text-[#212121]/80">
                When you choose Resham & Thread, you're not just buying a garment. You're supporting
                artisan livelihoods, preserving cultural heritage, and investing in a piece that
                will be treasured for years to come.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl bg-[#EDE6DF] p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">🪡</div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  100% Hand Embroidered
                </h3>
                <p className="text-sm text-[#212121]/70">
                  Every stitch crafted by skilled artisan hands
                </p>
              </div>
              <div className="group rounded-2xl bg-[#EDE6DF] p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">🌱</div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Sustainable Practice
                </h3>
                <p className="text-sm text-[#212121]/70">Made to order, zero waste approach</p>
              </div>
              <div className="group rounded-2xl bg-[#EDE6DF] p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">❤️</div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">Fair Trade</h3>
                <p className="text-sm text-[#212121]/70">Direct partnerships with artisans</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#BD7263] to-[#a86355] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to Own a Piece of Art?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Explore our collections or create something uniquely yours
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/search"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#BD7263] transition-all hover:bg-[#EDE6DF]"
              >
                Shop Collection
              </Link>
              <Link
                href="/custom"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#BD7263]"
              >
                Create Custom
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
