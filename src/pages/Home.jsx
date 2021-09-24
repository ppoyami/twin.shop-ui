import Announcement from '@/components/shared/Announcement';
import Navbar from '@/components/shared/Navbar';
import Slider from '@/components/Home/Slider';
import Categories from '@/components/Home/Categories';
import Newsletter from '@/components/Home/Newsletter';
import Products from '@/components/shared/Products';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
