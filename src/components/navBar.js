import { useEffect, useState } from "react"
import ModalLoad from "./ModalLoad"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import "../pages/css/style.css"
function NavBar() {
    const [showModalCarregando, setShowModalCarregando] = useState(false)
    const navigate = useNavigate()
    function VerificaLogin() {
        setShowModalCarregando(true)
        const tokenLogin = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
        axios.get(`${process.env.REACT_APP_API_URL}/verifica/login/usuario`, {
            headers: {
                Authorization: tokenLogin
            }
        }).then(function (resposta) {
            setShowModalCarregando(false)
        }).catch(function (erro) {
            navigate("/")
        })
    }
    useEffect(function () {
        VerificaLogin()
    }, [])
    return (
        <div className="App">
            <ModalLoad carregando={showModalCarregando} />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="btn btn-sm border px-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-list fs-2"></i>
                    </a>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fs-4" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-0 pt-0">
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/home/principal">Principal</a>
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/home/minha/conta">Minha Conta</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar