import Navbar from "./Components/Navbar";
import Filmes from "./Components/Filmes";
import Sessoes from "./Components/Sessoes";
import Assentos from "./Components/Assentos";
import Sucesso from "./Components/Sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Filmes />}/>
        <Route path="/sessoes/:idFilme" element={<Sessoes />}/>
        <Route path="/assentos/:idSessao" element={<Assentos />}/>
        <Route path="/sucesso" element={<Sucesso />}/>
      </Routes>

    </BrowserRouter>
  )
}


