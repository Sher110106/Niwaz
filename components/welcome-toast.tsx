'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('✨ Welcome to Niwaz!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Discover exquisite hand-embroidered ethnicwear crafted by skilled artisans across India.{' '}
            <a
              href="/custom"
              className="text-blue-600 hover:underline"
            >
              Order custom designs
            </a>
            .
          </>
        )
      });
    }
  }, []);

  return null;
}
