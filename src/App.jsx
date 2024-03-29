import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Hero = lazy(() => import("./components/hero/Hero"));
const BankInfo = lazy(() => import("./components/bankInfo/BankInfo"));
const LatestArticles = lazy(() =>
  import("./components/latestArticles/LatestArticles")
);
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar />

      <Hero />
      <BankInfo />
      <LatestArticles />
      <Footer />
    </Suspense>
  );
}

export default App;
