import CategorySection from '@/components/CategorySection';
import HeroCarousel from '@/components/HeroCarousel';
import { categories } from '@/data/siteData';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <div className="divide-y divide-border">
        {categories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </div>
    </>
  );
}
