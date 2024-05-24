import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Login from "./pages/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>

        <Routes>
          <Route path="/home" element={<MainPage />}>

          </Route>

          <Route path="/" element={<Login />} />
        </Routes>



      </BrowserRouter>
    </>
  )
}

export default App;
