import {Routes, Route} from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
