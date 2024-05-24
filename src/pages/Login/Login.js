import Logo from "../../assets/logo192.png"
import Footer from "../../components/footer"

function Login() {

    return (
        <div className="main">

            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="" width="60" height="60" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active rounded text-center" href="#"><button className="btn btn-outline-primary btn-sm d-block w-100">Criar uma conta</button></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active rounded text-center" href="#"><button className="btn btn-outline-secondary btn-sm d-block w-100">Mais sobre o FIG</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm col-lg-9 col-md-10 mt-5 mx-auto">
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
                                                <button type="submit" className="w-50 d-block m-auto btn btn-outline-primary btn-sm">Entrar<i className="bi bi-box-arrow-in-right ms-2"></i></button>
                                                <br />
                                                <div className="form-check mt-2 text-center">
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


            <div className="container">
                <div className="row">
                    <div className="col-sm col-lg-9 col-md-10 mt-5 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                Ultimas Anotações 24/05/2024
                            </div>
                            <div className="card-body">

                                <ul>
                                    <li>fazer a proposta do fig</li>
                                    <li>Fazer a tela de cadastro de conta</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm col-lg-9 col-md-10 mt-5 mx-auto">
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
            <Footer />
        </div>
    )
}

export default Login