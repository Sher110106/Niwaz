import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-[#ECECEC] bg-white text-[#212121] shadow-sm transition-all duration-300 hover:border-[#BD7263] hover:shadow-md hover:scale-105">
      <ShoppingCartIcon
        className={clsx('h-5 w-5 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#BD7263] text-[10px] font-bold text-white shadow-sm">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
