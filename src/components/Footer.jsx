import "./Footer.css";
import escudo from "../img/escudo-cucei.webp";

function Footer() {
  return (
    <footer className="footer">
      <img src={escudo} alt="Escudo de CUCEI" className="footer-logo" />
      <p><strong>Integrante:</strong> Sanchez Rodriguez Karen Itzell</p>
      <p><strong>Profesor:</strong> Gutierrez Cobián Zeus Emanue]</p>
      <p><strong>Materia:</strong> Desarrollo de aplicaciones Web en la nube y móviles</p>
      <p><strong>Calendario escolar:</strong> 2026B</p>
      <p><strong>Mes y año:</strong> Noviembre 2026</p>
      <p><strong>Institución:</strong> CUCEI – Universidad de Guadalajara</p>
    </footer>
  );
}

export default Footer;