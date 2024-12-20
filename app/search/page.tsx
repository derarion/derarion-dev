import { getList } from '@/libs/microcms';
import { REVALIDATE_INTERVAL } from '@/constants';
import ArticleList from '@/components/ArticleList';
import Pagination from '@/components/Pagination';

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = REVALIDATE_INTERVAL;

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q,
  });

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/search" q={searchParams.q} />
    </>
  );
}
