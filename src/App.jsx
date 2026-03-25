import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className="text-primary font-sans min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
