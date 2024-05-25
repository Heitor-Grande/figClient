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



            <Footer />
        </>
    )
}

export default CadConta