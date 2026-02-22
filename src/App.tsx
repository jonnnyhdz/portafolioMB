import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
