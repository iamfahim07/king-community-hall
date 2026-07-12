import { notFound } from 'next/navigation';
import CategoryDetails from '@/components/CategoryDetails';
import { categories } from '@/data/siteData';

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = categories.find((item) => item.id === categoryId);

  if (!category) notFound();

  return <CategoryDetails category={category} />;
}
