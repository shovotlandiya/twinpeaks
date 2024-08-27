import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import SelectedAreas from "./components/SelectedAreas";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <SelectedAreas />
      <Footer />
    </div>
  );
}

export default App;
