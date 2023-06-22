import Header from "@/components/Header";
import Cards from "@/components/landing/LandingSection";
import Zysoft from "@/components/landing/Zysoft";
import About from "@/components/landing/about";
import CardsSection from "@/components/landing/cards";
import Costumer from "@/components/landing/customerPage";
import DevCards from "@/components/landing/developmentCards";
import Founder from "@/components/landing/founder";
import HomeHeader from "@/components/landing/homeHeader";
import ItemContainer from "@/components/landing/itemContainer";
import Portfolio from "@/components/landing/portfolio";
import IndexPage from "@/components/landing/slidingcards";
import Team from "@/components/landing/team";
import Techno from "@/components/landing/technologies";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <HomeHeader />

      <CardsSection />
      <About />
      <Techno />
      <Portfolio />
      <DevCards />
      <Cards />
      <Team />
      <Founder />
      <Costumer />
      <div className="my-24">
        <IndexPage />
      </div>

      <Zysoft />

      <ItemContainer />
    </div>
  );
}
