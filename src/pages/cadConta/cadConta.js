import Logo from "../../assets/logo192.png"
import Footer from "../../components/footer"

function CadConta() {

    return (
        <>

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
                                    <a className="nav-link active rounded text-center" href="/"><button className="btn btn-outline-primary btn-sm d-block w-100">Home</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <p className="text-center"><b>Pré-Cadastro</b></p>
                        <p className="text-center mb-0">No pré-cadastro solicitamos apenas informações necessarias para que consiga acessar o FIG.</p>
                        <p className="text-center mb-0">Outras informações de cadastro podem ser solicitadas durante o uso do App.</p>
                    </div>
                </div>
            </div>

            <div className="card mt-5 w-75 m-auto">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm col-md-5 col-lg-3">
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input type="email" className="form-control form-control-sm text-capitalize" placeholder="Nome completo" />
                                </div>
                            </div>
                            <div className="col-sm col-md-7 col-lg-3">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemplo@email.com" />
                                </div>
                            </div>
                            <div className="col-sm col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label>Senha</label>
                                    <input type="password" className="form-control form-control-sm" placeholder="*******" />
                                </div>
                            </div>
                            <div className="col-sm col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label>Confirmar Senha</label>
                                    <input type="password" className="form-control form-control-sm" placeholder="*******" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm col-md col-lg-6 text-center m-auto">
                                <button className="btn btn-outline-primary btn-sm w-100">Finalizar Pré-Cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default CadConta