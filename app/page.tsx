import { getList } from '@/libs/microcms';
import { ITEMS_PER_PAGE } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: ITEMS_PER_PAGE,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
