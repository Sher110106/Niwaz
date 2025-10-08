import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { WelcomeToast } from 'components/welcome-toast';
import WhatsAppFab from 'components/whatsapp-fab';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const siteName = process.env.SITE_NAME || 'Resham & Thread';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description:
    'Hand-embroidered ethnicwear celebrating traditional craftsmanship. Custom lehengas, suits, and dupattas made by skilled artisans.',
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en">
      <body className="bg-[#EDE6DF] text-[#212121] selection:bg-[#547B6F] selection:text-white">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  );
}
