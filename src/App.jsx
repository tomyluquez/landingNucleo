import ButtonTop from './Components/ButtonTop';
import PreLoader from './Components/PreLoader';
import About from './Sections/About';
import Clients from './Sections/Clients';
import Comunity from './Sections/Comunity';
import Faq from './Sections/Faq';
import Features from './Sections/Features';
import Footer from './Sections/Footer';
import Hero from './Sections/Hero';
import Navbar from './Sections/Navbar';
import NavbarTop from './Sections/NavbarTop';
import Pricing from './Sections/Pricing';
import Screenshots from './Sections/Screenshots';
import Testimonials from './Sections/Testimonials';

function App() {
  return (
    <>
      <PreLoader />
      <ButtonTop />
      <NavbarTop />
      <Navbar />
      <Hero />
      <main>
        <Clients />
        <Features />
        <About />
        <Screenshots />
        <Testimonials />
        <Pricing />
        <Faq />
        <Comunity />
      </main>
      <Footer />
    </>
  );
}

export default App;
