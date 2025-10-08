import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center rounded-lg overflow-hidden',
        {
          'h-[40px] w-[40px]': !size,
          'h-[30px] w-[30px]': size === 'sm'
        }
      )}
    >
      <Image
        src="/logo.png"
        alt="NIWAZ - Hand Embroidered Excellence"
        width={size === 'sm' ? 30 : 40}
        height={size === 'sm' ? 30 : 40}
        className="object-contain"
        priority
      />
    </div>
  );
}
