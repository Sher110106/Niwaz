import clsx from 'clsx';
import { Suspense } from 'react';

import { getCollections } from 'lib/shopify';
import FilterList from './filter';

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded-sm';
const activeAndTitles = 'bg-[#BD7263]';
const items = 'bg-[#212121]/20';

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="w-full">
          <div className="mb-4 h-4 w-3/4 animate-pulse rounded bg-[#212121]/20"></div>
          <div className="space-y-2">
            <div className={clsx(skeleton, activeAndTitles)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
          </div>
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
