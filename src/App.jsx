import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Arena from "./components/Arena";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div style={{ paddingTop: "80px", position: "relative", overflowX: "hidden" }}>
      <CustomCursor />
      <Header />
      <Hero />
      <Characters />
      <Arena />
      <Footer />
    </div>
  );
}

export default App;