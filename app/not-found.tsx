import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.'
};

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#EDE6DF] px-6 py-20">
        <div className="mb-6 text-8xl">🧵</div>
        <h1 className="mb-4 text-center font-serif text-5xl font-bold text-[#212121] md:text-6xl">
          Thread Lost
        </h1>
        <p className="mb-8 max-w-md text-center text-lg text-[#212121]/70">
          Looks like this page has unraveled. Let's get you back on track.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#BD7263] px-8 py-4 text-center font-semibold text-white transition-all hover:bg-[#a86355]"
          >
            Return Home
          </Link>
          <Link
            href="/search"
            className="rounded-full border-2 border-[#547B6F] bg-white px-8 py-4 text-center font-semibold text-[#547B6F] transition-all hover:bg-[#547B6F] hover:text-white"
          >
            Browse Collections
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
