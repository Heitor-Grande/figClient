import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Login from "./pages/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadConta from "./pages/cadConta/cadConta";
import Principal from "./pages/menuPrincipal/principal";
import MinhaConta from "./pages/menuPrincipal/menu/minhaConta/minhaConta";
import ControleDeCaixa from "./pages/menuPrincipal/menu/controleCaixa/controleDeCaixa";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />}>
            <Route path="/home/principal" element={<Principal />} />
            <Route path="/home/controle/caixa" element={<ControleDeCaixa />} />
            <Route path="/home/minha/conta" element={<MinhaConta />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/cad/nova/conta" element={<CadConta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
