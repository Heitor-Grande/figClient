import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Login from "./pages/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadConta from "./pages/cadConta/cadConta";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
      />
      <BrowserRouter>

        <Routes>
          <Route path="/home" element={<MainPage />}>

          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/cad/nova/conta" element={<CadConta />} />
        </Routes>



      </BrowserRouter>
    </>
  )
}

export default App;
