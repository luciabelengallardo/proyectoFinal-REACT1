import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_contenedor d-flex flex-column align-items-stretch">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-4">REACT 1</div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <h5>Soporte</h5>
            <ul className="d-flex justify-content-center flex-md-column">
              <li className="pe-2">Quienes Somos</li>
              <li className="ps-2 ps-md-0">Ayuda</li>
            </ul>
          </div>

          {/* <!-- Redes --> */}
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center footer_redes">
            <div className="icons">
              <a href="">
                <i className="bi bi-facebook p-1"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram p-1"></i>
              </a>
              <a href="">
                <i className="bi bi-google p-1"></i>
              </a>
              <a href="">
                <i className="bi bi-whatsapp p-1"></i>
              </a>
              <a href="">
                <i className="bi bi-twitch p-1"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="col-12 d-flex align-content-center justify-content-center footer_copyright">
          © 2023 Copyright:
          <a href=""> REACT1.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
