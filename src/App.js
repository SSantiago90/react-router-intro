import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route
            path="/categoria/:idCategory"
            element={<ItemDetailContainer />}
          />
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={<h1>404: No encontrado</h1>} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
