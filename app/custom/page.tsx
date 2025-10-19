import Footer from 'components/layout/footer';

export const metadata = {
  title: 'Custom Orders',
  description:
    'Create your dream embroidered outfit. Work directly with our artisans to design something uniquely yours.'
};

export default function CustomPage() {
  return (
    <>
      <div className="bg-[#EDE6DF]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#547B6F] to-[#456b5f] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
              ✨ Bespoke Creations
            </div>
            <h1 className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl">
              Dream It, We Stitch It
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Work directly with our master artisans to create a one-of-a-kind embroidered
              masterpiece
            </p>
            <a
              href="https://wa.me/918708491362?text=I%20want%20a%20custom%20design"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Start Your Custom Journey
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
                How Custom Orders Work
              </h2>
              <p className="text-lg text-[#212121]/70">
                From concept to creation, we guide you every step of the way
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="group text-center transition-all duration-300 hover:scale-105">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#547B6F] to-[#456b5f] text-2xl font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  1
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Share Your Vision
                </h3>
                <p className="text-sm text-[#212121]/70 leading-relaxed">
                  Message us on WhatsApp with your ideas, inspiration images, or reference photos
                </p>
              </div>

              <div className="group text-center transition-all duration-300 hover:scale-105">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#547B6F] to-[#456b5f] text-2xl font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  2
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Design Consultation
                </h3>
                <p className="text-sm text-[#212121]/70 leading-relaxed">
                  Our design team helps refine your concept, suggesting fabrics, colors, and
                  embroidery styles
                </p>
              </div>

              <div className="group text-center transition-all duration-300 hover:scale-105">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#547B6F] to-[#456b5f] text-2xl font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  3
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Artisan Crafting
                </h3>
                <p className="text-sm text-[#212121]/70 leading-relaxed">
                  Your piece is hand-embroidered by our skilled artisans, with progress updates
                  along the way
                </p>
              </div>

              <div className="group text-center transition-all duration-300 hover:scale-105">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#547B6F] to-[#456b5f] text-2xl font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  4
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">Delivery</h3>
                <p className="text-sm text-[#212121]/70 leading-relaxed">
                  Receive your bespoke creation, beautifully packaged and ready to cherish
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="bg-[#EDE6DF] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
                What You Can Customize
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">🧵</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Embroidery Style
                </h3>
                <ul className="space-y-2 text-sm text-[#212121]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Zardozi (metallic thread work)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Resham (silk thread)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Mirror work (shisha)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Cutdana & sequins
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Chikankari
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Aari work
                  </li>
                </ul>
              </div>

              <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">🎨</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Colors & Fabrics
                </h3>
                <ul className="space-y-2 text-sm text-[#212121]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Choose from 100+ fabric options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Custom color combinations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Silk, georgette, chiffon, velvet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Contrast or tone-on-tone
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Premium or budget-friendly
                  </li>
                </ul>
              </div>

              <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">📏</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Size & Silhouette
                </h3>
                <ul className="space-y-2 text-sm text-[#212121]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Made-to-measure sizing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Custom length adjustments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Neckline variations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Sleeve styles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Blouse/choli designs
                  </li>
                </ul>
              </div>

              <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">✨</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Design Motifs
                </h3>
                <ul className="space-y-2 text-sm text-[#212121]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Floral patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Geometric designs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Traditional motifs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Contemporary abstracts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Personalized monograms
                  </li>
                </ul>
              </div>

              <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">💎</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">Embellishments</h3>
                <ul className="space-y-2 text-sm text-[#212121]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Pearls & beads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Stones & crystals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Gota patti borders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Tassels & latkan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Zari & dori work
                  </li>
                </ul>
              </div>

              <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">🎁</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#212121] transition-colors duration-300 group-hover:text-[#BD7263]">
                  Special Requests
                </h3>
                <ul className="space-y-2 text-sm text-[#212121]/70">
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Bridal trousseau sets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Mother-daughter matching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Coordinated family outfits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Occasion-specific designs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#547B6F]">•</span> Heritage recreations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Pricing */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-[#212121] md:text-5xl">
                Timeline & Investment
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-[#ECECEC] bg-[#EDE6DF] p-8">
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#212121]">
                  Creation Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Design Consultation</span>
                    <span className="font-semibold text-[#212121]">1-2 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Fabric Sourcing</span>
                    <span className="font-semibold text-[#212121]">3-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Hand Embroidery</span>
                    <span className="font-semibold text-[#212121]">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Final Stitching</span>
                    <span className="font-semibold text-[#212121]">3-5 days</span>
                  </div>
                  <div className="mt-6 border-t border-[#212121]/20 pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#212121]">Total Time</span>
                      <span className="font-bold text-[#BD7263]">3-6 weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#ECECEC] bg-[#EDE6DF] p-8">
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#212121]">
                  Starting Prices
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Custom Kurta/Suit</span>
                    <span className="font-semibold text-[#212121]">₹8,999+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Custom Lehenga</span>
                    <span className="font-semibold text-[#212121]">₹24,999+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Embroidered Dupatta</span>
                    <span className="font-semibold text-[#212121]">₹4,999+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#212121]/70">Bridal Ensemble</span>
                    <span className="font-semibold text-[#212121]">₹49,999+</span>
                  </div>
                  <div className="mt-6 rounded-lg bg-white p-4">
                    <p className="text-sm text-[#212121]/70">
                      <strong>Note:</strong> Final pricing depends on design complexity, fabric
                      choice, and embroidery density. Get a personalized quote via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-[#BD7263] to-[#a86355] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
              Ready to Create Your Masterpiece?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Let's bring your vision to life. Chat with our design team today.
            </p>
            <a
              href="https://wa.me/918708491362?text=I%20want%20a%20custom%20design"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-xl font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
