import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Craft',
  description:
    'Discover the intricate art of hand embroidery - the techniques, traditions, and talented artisans behind every Resham & Thread creation.'
};

export default function OurCraftPage() {
  return (
    <>
      <div className="bg-[#EDE6DF]">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mb-6 inline-block rounded-full bg-[#547B6F] px-4 py-1.5 text-sm font-medium text-white">
            The Art of Embroidery
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-[#212121] md:text-6xl">
            Every Stitch Tells
            <span className="block text-[#BD7263]">A Story</span>
          </h1>
          <p className="text-xl text-[#212121]/70">
            Explore the ancient techniques and skilled hands behind our creations
          </p>
        </section>

        {/* The Process */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
                The Journey from Thread to Treasure
              </h2>
            </div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-4 inline-block rounded-full bg-[#547B6F] px-4 py-2 text-sm font-semibold text-white">
                    Step 1
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-[#212121]">
                    Design Sketching
                  </h3>
                  <p className="mb-4 text-lg text-[#212121]/80">
                    Every piece begins with a hand-drawn sketch. Our designers work closely with
                    artisans to translate traditional motifs into contemporary patterns that honor
                    heritage while embracing modern aesthetics.
                  </p>
                  <p className="text-[#212121]/70">
                    This collaborative process ensures that each design is both technically feasible
                    for hand embroidery and visually stunning.
                  </p>
                </div>
                <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5e6e0] to-[#e8d5ce] text-8xl">
                  ✏️
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e8f0ed] to-[#d4e5df] text-8xl">
                    🧵
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 inline-block rounded-full bg-[#547B6F] px-4 py-2 text-sm font-semibold text-white">
                    Step 2
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-[#212121]">
                    Thread & Fabric Selection
                  </h3>
                  <p className="mb-4 text-lg text-[#212121]/80">
                    We source the finest silks, metallics, and specialty threads from across India.
                    Each thread is carefully chosen for its luster, strength, and color fastness.
                  </p>
                  <p className="text-[#212121]/70">
                    Fabrics are hand-selected for their quality and ability to showcase the
                    embroidery beautifully, from luxurious silks to flowing georgettes.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-4 inline-block rounded-full bg-[#547B6F] px-4 py-2 text-sm font-semibold text-white">
                    Step 3
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-[#212121]">
                    Pattern Transfer
                  </h3>
                  <p className="mb-4 text-lg text-[#212121]/80">
                    The design is carefully transferred onto the fabric using traditional techniques
                    - sometimes with chalk, sometimes with temporary carbon, always with precision.
                  </p>
                  <p className="text-[#212121]/70">
                    This delicate step sets the foundation for the entire embroidery work, requiring
                    a steady hand and keen eye for detail.
                  </p>
                </div>
                <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0e8ed] to-[#e3d5df] text-8xl">
                  📐
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5e6e0] to-[#e8d5ce] text-8xl">
                    🪡
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 inline-block rounded-full bg-[#547B6F] px-4 py-2 text-sm font-semibold text-white">
                    Step 4
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-[#212121]">
                    Hand Embroidery
                  </h3>
                  <p className="mb-4 text-lg text-[#212121]/80">
                    This is where magic happens. Our artisans spend days or even weeks on a single
                    piece, creating thousands of intricate stitches by hand.
                  </p>
                  <p className="text-[#212121]/70">
                    Each stitch is a meditation, a continuation of centuries-old tradition, and a
                    testament to the artisan's skill and patience.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-4 inline-block rounded-full bg-[#547B6F] px-4 py-2 text-sm font-semibold text-white">
                    Step 5
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-[#212121]">
                    Quality Check & Finishing
                  </h3>
                  <p className="mb-4 text-lg text-[#212121]/80">
                    Every completed embroidery panel is inspected meticulously for consistency,
                    thread tension, and overall beauty before moving to final assembly.
                  </p>
                  <p className="text-[#212121]/70">
                    The garment is then expertly tailored, with each seam and hem receiving the same
                    attention to detail as the embroidery itself.
                  </p>
                </div>
                <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e8f0ed] to-[#d4e5df] text-8xl">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embroidery Techniques */}
        <section className="bg-[#EDE6DF] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
                Traditional Techniques We Master
              </h2>
              <p className="text-lg text-[#212121]/70">
                Ancient arts passed down through generations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121]">Zardozi</h3>
                <p className="text-sm text-[#212121]/70">
                  Metallic embroidery using gold and silver threads, often embellished with pearls
                  and precious stones. A regal technique favored by royalty for centuries.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121]">Resham</h3>
                <p className="text-sm text-[#212121]/70">
                  Silk thread embroidery creating colorful, flowing designs. The soft luster of
                  resham creates depth and dimension in floral and nature-inspired motifs.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121]">Aari Work</h3>
                <p className="text-sm text-[#212121]/70">
                  Using a specialized hooked needle (aari), artisans create intricate chain stitch
                  patterns with incredible speed and precision.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121]">Chikankari</h3>
                <p className="text-sm text-[#212121]/70">
                  Delicate white-on-white embroidery from Lucknow, featuring elegant shadow work and
                  ethereal patterns perfect for summer wear.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121]">Mirror Work</h3>
                <p className="text-sm text-[#212121]/70">
                  Small mirrors (shisha) are intricately stitched into fabric, catching light and
                  creating dazzling effects inspired by traditional Gujarati and Rajasthani crafts.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121]">Gota Patti</h3>
                <p className="text-sm text-[#212121]/70">
                  Appliqué work using ribbons of gold and silver, creating geometric patterns and
                  borders that add sparkle and structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Artisans */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
              The Hands Behind the Art
            </h2>
            <p className="mb-12 text-lg text-[#212121]/70">
              Our artisans are the heart of Resham & Thread. Each brings decades of experience and a
              deep love for their craft.
            </p>

            <div className="rounded-2xl bg-[#EDE6DF] p-10">
              <p className="mb-6 text-xl italic leading-relaxed text-[#212121]">
                "When I embroider, I'm not just creating a pattern - I'm weaving my grandmother's
                stories, my mother's teachings, and my own dreams into every stitch. Each piece
                carries our legacy forward."
              </p>
              <p className="font-semibold text-[#212121]">— Meera Devi, Master Artisan</p>
              <p className="text-sm text-[#212121]/70">35+ years of embroidery expertise</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#547B6F] to-[#456b5f] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Experience the Artistry
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Each piece is a wearable work of art. Explore our collection or create your own
              custom design.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/search"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#547B6F] transition-all hover:bg-[#EDE6DF]"
              >
                Shop Collection
              </Link>
              <Link
                href="/custom"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#547B6F]"
              >
                Commission Custom Piece
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
