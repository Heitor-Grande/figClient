import { useEffect, useState } from "react"
import InputComponente from "../../../../components/inputComponent/inputComponente"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from "axios"
import ModalLoad from "../../../../components/ModalLoad";
import { toast } from "react-toastify"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function MinhaConta() {
    const [inputsConta, setInputsConta] = useState({
        email: "",
        nome: "",
        senha: "",
        avatar: "",
        dataCriacao: "",
        ativo: true
    })
    function setEmailConta(e) {
        setInputsConta({
            ...inputsConta,
            email: e.target.value
        })
    }
    function setNomeConta(e) {
        setInputsConta({
            ...inputsConta,
            nome: e.target.value
        })
    }
    function setSenhaConta(e) {
        setInputsConta({
            ...inputsConta,
            nome: e.target.value
        })
    }
    const token = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
    const [showModalCarregando, setShowModalCarregando] = useState(false)
    function CarregarInformacoesUsuario() {
        setShowModalCarregando(true)
        const idUsuario = sessionStorage.getItem("idUsuario") || localStorage.getItem("idUsuario")
        axios.get(`${process.env.REACT_APP_API_URL}/carregar/usuario/${idUsuario}`, {
            headers: {
                Authorization: token
            }
        }).then(function (resposta) {
            const usuario = resposta.data.usuario
            console.log(usuario)
            setInputsConta({
                ...inputsConta,
                nome: usuario.nome,
                senha: "",
                avatar: usuario.avatar,
                email: usuario.email,
                dataCriacao: usuario.datacriacao.split("T")[0],
                ativo: usuario.ativo
            })
            setShowModalCarregando(false)
        }).catch(function (erro) {
            toast.error(erro.response.data.message || erro.message)
            setShowModalCarregando(false)
        })
    }
    function AtualizarConta() {
        const dados = {
            inputsConta
        }
    }
    useEffect(function () {
        CarregarInformacoesUsuario()
    }, [])
    return (
        <div className="container-fluid">
            <ModalLoad carregando={showModalCarregando} mensagem={"Carregando conta..."} />
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12 mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Minha Conta</h4>
                        </div>
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm col-md-2 col-lg-2">
                                        <Stack className="text-center" direction="row" spacing={2}>
                                            <Avatar alt="Remy Sharp"
                                                src={inputsConta.avatar}
                                                sx={{ width: 100, height: 100 }}
                                            />
                                            <button type="button" className="btn border-0"><i className="bi bi-pencil-square text-primary"></i></button>
                                        </Stack>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm col-md-6 col-lg-2">
                                        <InputComponente
                                            label={"Data de Criação"}
                                            tipo={"date"}
                                            required={true}
                                            id={"dataCriacao"}
                                            placeholder={"Data de Criação"}
                                            value={inputsConta.dataCriacao}
                                            onchange={function () {

                                            }}
                                            readOnly={true}
                                        />
                                    </div>
                                    <div className="col-sm col-md-6 col-lg-2 pt-3">
                                        <FormGroup>
                                            <FormControlLabel
                                                disabled
                                                control={<Checkbox checked={inputsConta.ativo} />}
                                                label={inputsConta.ativo == true ? "Ativo" : "Bloqueado"} />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm col-md-6 col-lg-6">
                                        <InputComponente
                                            label={"Nome"}
                                            tipo={"text"}
                                            required={true}
                                            id={"nomeUsuario"}
                                            placeholder={"Nome completo"}
                                            value={inputsConta.nome}
                                            onchange={setNomeConta}
                                            readOnly={false}
                                        />
                                    </div>
                                    <div className="col-sm col-md-6 col-lg-6">
                                        <InputComponente
                                            label={"E-mail"}
                                            tipo={"email"}
                                            required={true}
                                            id={"emailUsuario"}
                                            placeholder={"email@email.com"}
                                            value={inputsConta.email}
                                            onchange={setEmailConta}
                                            readOnly={false}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm col-md-6 col-lg-6">
                                        <InputComponente
                                            label={"Redefinir Senha"}
                                            tipo={"password"}
                                            required={true}
                                            id={"senhaUsuario"}
                                            placeholder={"********"}
                                            value={inputsConta.senha}
                                            onchange={setSenhaConta}
                                            readOnly={false}
                                        />
                                        <small>Não compartilhe as informações dessa tela.</small>
                                    </div>
                                    <div className="col-sm col-md-6 col-lg-6 text-end">
                                        <button className="btn btn-outline-primary btn-sm mt-4 w-100">Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MinhaConta