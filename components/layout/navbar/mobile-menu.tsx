'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#ECECEC] bg-white text-[#212121] shadow-sm transition-all duration-300 hover:border-[#BD7263] hover:shadow-md hover:scale-105 md:hidden"
      >
        <Bars3Icon className="h-5 w-5" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-gradient-to-br from-[#EDE6DF] to-[#f0e8e8] pb-6">
              <div className="p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#BD7263] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-[#212121]">Menu</h2>
                  </div>
                  <button
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#ECECEC] bg-white text-[#212121] shadow-sm transition-all duration-300 hover:border-[#BD7263] hover:shadow-md hover:scale-105"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                {menu.length ? (
                  <ul className="flex w-full flex-col space-y-3">
                    {menu.map((item: Menu) => (
                      <li key={item.title}>
                        <Link 
                          href={item.path} 
                          prefetch={true} 
                          onClick={closeMobileMenu}
                          className="group flex items-center justify-between rounded-xl bg-white/60 px-6 py-4 text-lg font-medium text-[#212121] transition-all duration-300 hover:bg-white hover:text-[#BD7263] hover:shadow-lg hover:scale-[1.02]"
                        >
                          <span>{item.title}</span>
                          <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* WhatsApp Contact */}
                <div className="mt-8 pt-6 border-t border-white/30">
                  <div className="rounded-xl bg-white/60 p-4">
                    <p className="mb-3 text-sm text-[#212121]/70">Need help with your order?</p>
                    <a
                      href="https://wa.me/918708491362?text=I%20want%20a%20custom%20design"
                      className="group flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-xl hover:scale-105"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="font-semibold">Chat on WhatsApp</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
