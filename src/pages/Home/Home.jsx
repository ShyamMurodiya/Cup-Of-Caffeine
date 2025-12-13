import GalleryPreview from "../../components/GalleryPreview";
import Hero from "../../components/Hero";
import PopularPicks from "../../components/PopularPicks";
import WhyUs from "../../components/WhyUs";
import useMenu from "../../hooks/useMenu";


const POPULAR_IDS = [1, 4, 6, 7];

export default function Home() {
  const items = useMenu();

  const popularItems = items.filter((item) =>
    POPULAR_IDS.includes(Number(item.id))
  );

  return (
    <>
      <Hero />
      <PopularPicks items={popularItems} />
      <WhyUs />
      <GalleryPreview/>
    </>
  );
}