
import "./Footer.css";

function Footer() {
  return (
    <footer id="contatos" className="footer">
      <div className="footer-conteudo">
        <div className="footer-marca">
          <img
            src="/images/logo.png"
            alt="Logo Arena Sunset"
            className="footer-logo"
          />

          <p>
            Esporte, encontros e bons momentos.
            A sua arena de esportes de areia!
          </p>
        </div>

        <div className="footer-contatos">
          <h2>Contatos</h2>

          <div className="footer-item">
            <span className="footer-icone">📞</span>
            <div>
              <h3>Telefone / WhatsApp</h3>
              <p>[Telefone a informar]</p>
            </div>
          </div>

          <div className="footer-item">
            <span className="footer-icone">✉️</span>
            <div>
              <h3>E-mail</h3>
              <p>[E-mail a informar]</p>
            </div>
          </div>
        </div>

        <div className="footer-localizacao">
          <h2>Encontre a Sunset</h2>

          <div className="footer-item">
            <span className="footer-icone">📍</span>
            <div>
              <h3>Localização</h3>
              <p>[Endereço a informar]</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
