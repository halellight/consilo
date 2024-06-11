// App.js
import React from "react";
import "./App.css"; // Import your CSS here
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CircleSection from "./components/CircleSection";
import Header from "./components/Header";
import FeaturedWork from "./components/FeaturedWork";
import ApproachSection from "./components/ApproachSection";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="border">
      <Navbar />
      <CircleSection />
      <Header />
      <ApproachSection />
      <FeaturedWork />
      <FAQ />
      <Footer />

      {/* <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUpform />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
