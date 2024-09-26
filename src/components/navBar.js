import { useEffect, useState } from "react"
import ModalLoad from "./ModalLoad"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import "../pages/css/style.css"
import { toast } from "react-toastify"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function NavBar() {
    const [showModalCarregando, setShowModalCarregando] = useState(false)
    const navigate = useNavigate()
    function VerificaLogin() {
        setShowModalCarregando(true)
        const tokenLogin = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
        const id_usuario = sessionStorage.getItem("idUsuario") || localStorage.getItem("idUsuario")
        axios.get(`${process.env.REACT_APP_API_URL}/verifica/login/usuario/${id_usuario}`, {
            headers: {
                Authorization: tokenLogin
            }
        }).then(function (resposta) {
            setShowModalCarregando(false)
        }).catch(function (erro) {
            navigate("/")
        })
    }
    const [inputsUsuario, setInputsUsuario] = useState({
        nome: "",
        avatar: ""
    })
    const token = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
    function CarregarInformacoesUsuario() {
        setShowModalCarregando(true)
        const idUsuario = sessionStorage.getItem("idUsuario") || localStorage.getItem("idUsuario")
        axios.get(`${process.env.REACT_APP_API_URL}/carregar/usuario/${idUsuario}`, {
            headers: {
                Authorization: token
            }
        }).then(function (resposta) {
            const usuario = resposta.data.usuario
            setInputsUsuario({
                ...inputsUsuario,
                nome: usuario.nome,
                avatar: usuario.avatar
            })
            setShowModalCarregando(false)
        }).catch(function (erro) {
            toast.error(erro.response.data.message || erro.message)
            setShowModalCarregando(false)
        })
    }
    function LogoOff() {
        sessionStorage.clear()
        localStorage.clear()
    }
    function minhaConta() {
        window.location = '/home/minha/conta'
    }
    useEffect(function () {
        VerificaLogin()
        CarregarInformacoesUsuario()
    }, [])
    // Estado para armazenar o evento beforeinstallprompt
    const [installPromptEvent, setInstallPromptEvent] = useState(null)
    // Estado para controlar se o botão de instalar deve aparecer
    const [isInstallable, setIsInstallable] = useState(false)
    useEffect(() => {
        // Escuta o evento beforeinstallprompt
        const handleBeforeInstallPrompt = (event) => {
            // Previne o prompt padrão de instalação
            event.preventDefault();
            // Armazena o evento para ser disparado posteriormente
            setInstallPromptEvent(event);
            // Mostra o botão de instalação
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);
    const handleInstallClick = () => {
        if (installPromptEvent) {
            // Dispara o prompt de instalação
            installPromptEvent.prompt();

            // Verifica a escolha do usuário
            installPromptEvent.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuário aceitou a instalação');
                } else {
                    console.log('Usuário recusou a instalação');
                }
                // Reseta o evento após a escolha
                setInstallPromptEvent(null);
                setIsInstallable(false);
            });
        }
    };
    return (
        <div className="App mb-3">
            <ModalLoad carregando={showModalCarregando} />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="btn btn-sm border px-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-list fs-2"></i>
                    </a>
                    <div className="row">
                        <div className="col-sm col-md col-lg d-flex">
                            <Badge badgeContent={4} color="primary">
                                <MailIcon sx={{ cursor: "pointer" }} color="disabled" />
                            </Badge>
                            <Stack sx={{ cursor: "pointer" }} className="text-center" direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp"
                                    src={inputsUsuario.avatar}
                                    sx={{ width: 50, height: 50 }}
                                    onClick={minhaConta}
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fs-4" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-0 pt-0">
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/home/principal"><i className="bi bi-clipboard2-data me-2"></i>Principal</a>
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/home/controle/caixa"><i className="bi bi-coin me-2"></i>Controle de Caixa</a>
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/home/meus/arquivos"><i className="bi bi-folder-fill me-2"></i>Meus Arquivos</a>
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/home/minha/conta"><i className="bi bi-person-circle me-2"></i>Minha Conta</a>
                    <hr />
                    <a className="rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/" onClick={LogoOff}><i className="bi bi-box-arrow-left me-2"></i>Sair</a>
                    <button className="w-100 text-center rounded-0 btn hoverLink d-block ps-3 fs-5 border-0 link-offset-2 link-underline link-underline-opacity-0" href="/" hidden={!isInstallable} onClick={handleInstallClick}><i className="bi bi-file-arrow-down me-2"></i>Instalar APP</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar