import "./App.css";
import { Home } from "./components/Screens/home";
import { PaginaLote } from "./components/Screens/pagina-lote";
import { PaginaBusca } from "./components/Screens/pagina-busca";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Definindo a rota para a página de produto com um parâmetro dinâmico */}
          <Route path="/lote/:id" element={<PaginaLote />} />
          <Route path="/pesquisa" element={<PaginaBusca />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
