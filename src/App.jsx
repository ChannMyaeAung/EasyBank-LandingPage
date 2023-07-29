import { Suspense, lazy, useState } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const BankInfo = lazy(() => import("./components/BankInfo"));
const LatestArticles = lazy(() => import("./components/LatestArticles"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <div className="relative">
        {/* Overlay Transparent Bg */}
        {isNavOpen && (
          <div className="absolute z-10 w-full h-full bg-black opacity-50 md:hidden" />
        )}
        <Hero />
        <BankInfo />
        <LatestArticles />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
