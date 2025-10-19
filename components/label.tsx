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
      className={clsx('absolute bottom-0 left-0 flex w-full px-3 pb-3 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex w-full flex-col space-y-1.5 rounded-xl border border-[#ECECEC] bg-white/95 p-2.5 backdrop-blur-md shadow-lg dark:border-neutral-800 dark:bg-black/80 dark:text-white">
        <h3 className="line-clamp-2 text-xs font-medium leading-tight tracking-tight text-[#212121] dark:text-white">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <Price
            className="text-sm font-bold text-[#BD7263]"
            amount={amount}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline text-xs font-medium ml-1"
          />
          <span className="text-xs font-medium text-[#547B6F]">Hand Made</span>
        </div>
      </div>
    </div>
  );
};

export default Label;
