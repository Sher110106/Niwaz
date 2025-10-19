import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex w-full flex-col space-y-2 rounded-2xl border border-[#ECECEC] bg-white/95 p-3 backdrop-blur-md shadow-lg dark:border-neutral-800 dark:bg-black/80 dark:text-white">
        <h3 className="line-clamp-2 text-sm font-medium leading-tight tracking-tight text-[#212121] dark:text-white">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <Price
            className="text-lg font-bold text-[#BD7263]"
            amount={amount}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline text-sm font-medium ml-1"
          />
          <span className="text-xs font-medium text-[#547B6F]">Hand Embroidered</span>
        </div>
      </div>
    </div>
  );
};

export default Label;
