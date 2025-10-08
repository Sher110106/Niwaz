'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-[#ECECEC] bg-white p-8 md:p-12 shadow-sm">
      <h2 className="text-xl font-bold text-[#212121]">Oh no!</h2>
      <p className="my-2 text-[#212121]/80">
        There was an issue with our storefront. This could be a temporary issue, please try your
        action again.
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-[#BD7263] p-4 tracking-wide text-white hover:bg-[#a86355] transition-colors duration-200"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
