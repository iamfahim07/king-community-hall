import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryDetails from '@/components/CategoryDetails';
import { categories, siteInfo } from '@/data/siteData';

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = categories.find((item) => item.id === categoryId);

  if (!category) return {};

  const title = `${category.bn.name} – ${category.en.name}`;

  return {
    title,
    description: category.bn.description,
    alternates: { canonical: category.route },
    openGraph: {
      title: `${title} | ${siteInfo.name.en}`,
      description: category.bn.subtitle,
      url: category.route,
      siteName: siteInfo.name.en,
      images: [{ url: category.heroImage }],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = categories.find((item) => item.id === categoryId);

  if (!category) notFound();

  return <CategoryDetails category={category} />;
}
