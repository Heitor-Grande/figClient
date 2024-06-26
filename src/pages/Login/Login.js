import Logo from "../../assets/logo192.png"
import Footer from "../../components/footer"
import { useEffect } from "react"
import TokenPublic from "../../functions/tokenPublic"
import { toast } from "react-toastify"
import ModalLoad from "../../components/ModalLoad"
import { useState } from 'react';

function Login() {

    const [carregando, setCarregando] = useState(false)
    useEffect(function () {


        if (!sessionStorage.getItem("tokenPublic")) {
            setCarregando(true)
            TokenPublic().then(function () {


                setCarregando(false)
            }).catch(function (erro) {

                setCarregando(false)
                toast.error(erro.response.data || erro.message || erro.statusText)
            })
        }
    }, [])

    return (
        <div className="main">

            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="" width="60" height="60" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active rounded text-center" href="/cad/nova/conta"><button className="btn btn-outline-primary btn-sm d-block w-100">Criar uma conta</button></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active rounded text-center" href="#infoFIG"><button className="btn btn-outline-secondary btn-sm d-block w-100">Mais sobre o FIG</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container  mt-5">
                <div className="row">
                    <div className="col-sm col-lg-9 col-md-10 mx-auto">
                        <div className="card">

                            <div className="card-body">

                                <div className="container">
                                    <div className="row">
                                        <div className="col text-center">
                                            <img src={Logo} className="rounded h-50 d-inline-block" alt="..." />
                                        </div>
                                        <div className="col-sm col-md col-lg">
                                            <form>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemplo@email.com" />
                                                    <small id="emailHelp" className="form-text text-muted">Nunca compartilhe essas informações.</small>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <label >Senha</label>
                                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="*******" />
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" >Salvar Login</label>
                                                </div>
                                                <br />
                                                <button type="submit" className="w-75 d-block m-auto btn btn-outline-primary btn-sm">Entrar<i className="bi bi-box-arrow-in-right ms-2"></i></button>
                                                <br />
                                                <div className="text-center">
                                                    <a href="#" className="link-danger text-center">Esqueci minha senha</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm col-lg-9 col-md-10 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                Ultimas Anotações 08/06/2024
                            </div>
                            <div className="card-body">

                                <ul>
                                    <li>fazer login</li>
                                    <li>fazer recuperação de senha</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5" id="infoFIG">
                <div className="row">
                    <div className="col-sm col-md col-lg">
                        <p className="text-center">O FIG foi planejado para simplificar e otimizar a gestão de tarefas tanto para negócios quanto para a vida pessoal. Com ferramentas essenciais para o cadastro de clientes, controle de caixa e organização de agendas, ele oferece uma interface intuitiva e funcionalidades avançadas que aumentam a eficiência,
                            melhoram a satisfação dos clientes e promovem um equilíbrio saudável entre vida pessoal e profissional.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm col-md col-lg">
                        <h4 className="text-center">Principais Funcionalidades</h4>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm col-lg-9 col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-4">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Cadastro de Clientes</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Controle de Caixa</a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Controle de Agenda</a>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <ul>
                                            <li>Tenha a sua carteira de clientes.</li>
                                            <li>Envie notificações personalizadas para os clientes cadastrados.
                                                Aumente a satisfação e fidelização dos clientes.</li>
                                            <li>Histórico de interações.</li>
                                            <li>Recomende produtos ou serviços que sejam mais relevantes para cada cliente.</li>
                                            <li>Permite obter feedback direto dos clientes sobre produtos e serviços.</li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        <ul>
                                            <li>Permite registrar e acompanhar as entradas e saídas do seu caixa,
                                                facilitando a sua organização financeira ou do seu negócio.</li>
                                            <li>Melhore a gestão de dívidas e o controle sobre os recebíveis,
                                                evitando inadimplências e atrasos.</li>
                                            <li>Identifique áreas onde os custos podem ser reduzidos ou otimizados, aumentando a eficiência operacional.</li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                        <ul>
                                            <li>Facilite a organização de tarefas e compromissos, permitindo um planejamento
                                                mais eficiente e a priorização de atividades importantes.</li>
                                            <li>Ajuda a equilibrar compromissos pessoais e profissionais,
                                                garantindo que haja tempo para atividades de lazer e descanso, o que é essencial para o bem-estar geral.</li>
                                            <li>Receba notificações com aviso referente aos agendamentos.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm col-md col-lg">
                        <p className="text-center">Nosso aplicativo é a ferramenta ideal para quem busca melhorar a gestão do seu negócio e da sua vida pessoal,
                            aumentando a produtividade e proporcionando uma experiência superior tanto para gestores quanto para indivíduos.</p>
                    </div>
                </div>
            </div>
            <ModalLoad carregando={carregando} />
            <Footer />
        </div>
    )
}

export default Login