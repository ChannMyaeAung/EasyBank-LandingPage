import { Suspense, lazy, useState } from "react";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const BankInfo = lazy(() => import("./components/BankInfo"));
const LatestArticles = lazy(() => import("./components/LatestArticles"));
const Footer = lazy(() => import("./components/Footer"));

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
