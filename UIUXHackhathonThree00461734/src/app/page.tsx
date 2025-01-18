import DiscountItem from "./components/discount_items";
import FeaturedSection from "./components/featured_section";
import FeaturedProducts from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/offer";
import SubscribeSection from "./components/subscribe";
import TopCategories from "./components/top_categories";
import TrendingProducts from "./components/trending_products";
import LatestBlogSection from "./components/LatestBlogSection";

export default function Home() {
  return (
    <main className="bg-gray-50 mx-auto ">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Latest Products */}
      <LatestProducts />

      {/* Shopex Offer */}
      <ShopexOffer />

      {/* Unique Features */}
      <FeaturedSection />

      {/* Trending Products */}
      <TrendingProducts />

      {/* Discount Item */}
      <DiscountItem />

      {/* Top Categories */}
      <TopCategories />

      {/* Subscribe Section */}
      <SubscribeSection />

      {/* Latest Blog Section */}
      <LatestBlogSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
