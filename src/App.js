import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
