import clsx from 'clsx';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center rounded-lg border border-[#ECECEC] bg-gradient-to-br from-[#f5e6e0] to-[#e8d5ce]',
        {
          'h-[40px] w-[40px]': !size,
          'h-[30px] w-[30px]': size === 'sm'
        }
      )}
    >
      <span
        className={clsx('font-serif font-bold text-[#BD7263]', {
          'text-lg': !size,
          'text-sm': size === 'sm'
        })}
      >
        R&T
      </span>
    </div>
  );
}
