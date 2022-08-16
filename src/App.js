import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { createContext, useState } from "react";

// 1. Inicializamos el Context con React.createContext()
// 2. Creamos un Provider y le damos un "value"
// 3. Definimos los componentes que van a acceder al context (Consumers)
// 4. Damos a los componentes acceso al context con el hook useContext()
// 5. Los componentes consumers podrán acceder y "subscribirse" al "value" del context

export const UserContext = createContext({ username: "anonymous" });
const ContextProvider = UserContext.Provider;

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState("anonymous");

  return (
    <ContextProvider value={{ username, setUsername }}>
      {children}
    </ContextProvider>
  );
}

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categoria/:idCategory"
              element={<ItemDetailContainer />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404: No encontrado</h1>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
