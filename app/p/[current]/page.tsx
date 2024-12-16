import { getList } from '@/libs/microcms';
import { ITEMS_PER_PAGE, REVALIDATE_INTERVAL } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = REVALIDATE_INTERVAL;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: ITEMS_PER_PAGE,
    offset: ITEMS_PER_PAGE * (current - 1),
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} />
    </>
  );
}
