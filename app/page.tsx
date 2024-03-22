import CTA from '@/components/CTA';
import GradientWrapper from '@/components/GradientWrapper';
import Hero from '@/components/home/Hero';
import Brand from '@/components/home/Brand';
import Product from '@/components/home/Product';
import Case from '@/components/home/Case';
import Contact from '@/components/home/Contact';
import Carousel from '@/components/home/Carousel';
import OptionBar from '@/components/OptionBar';

export default function Home() {
  return (
    <>
      <Carousel />
      <OptionBar />
      <Product />
    </>
  );
}
