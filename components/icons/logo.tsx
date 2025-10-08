import clsx from 'clsx';
import Image from 'next/image';

export default function LogoIcon(props: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={clsx('flex items-center justify-center', props.className)}
    >
      <Image
        src="/logo.png"
        alt="NIWAZ - Hand Embroidered Excellence"
        width={16}
        height={16}
        className="object-contain"
        priority
      />
    </div>
  );
}
