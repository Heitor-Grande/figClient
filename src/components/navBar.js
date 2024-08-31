import { useEffect, useState } from "react"
import ModalLoad from "./ModalLoad"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
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
                    <a className="navbar-brand" href="#">FIG</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            {/*<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar