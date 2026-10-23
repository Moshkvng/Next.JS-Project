
import Areaguild from "./components/Areaguild";
import Dreamhouse from "./components/Dreamhouse";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Navtop from "./components/Navtop";
import Ourachievement from "./components/Ourachievement";
import Ourvalue from "./components/Ourvalue";
import Question from "./components/Question";
import Search from "./components/search";
import Shoppage from "./components/Shoppage";




export default function Home() {
  return (
    <div className="">
      <div className="bg-[#fef7f2]">
        <Navtop />
        <Nav />
        <Hero />
      </div>
      <Search />
      <Dreamhouse />
      <Ourvalue />
      <Ourachievement />
      <Areaguild />
      <Shoppage />
      <Filter />
      <Question />
      <Footer />
    </div>
  );
}
