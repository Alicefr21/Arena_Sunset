
import "./Header.css";
import Button from "./Button";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo da arena" />
        </div>

        <div className="nav-links">
          <a href="#inicio">Home</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#contatos">Contatos</a>
        </div>

        <div className="header-botoes">
        <Button id="entrar-btn" texto="ENTRAR" />

        <Button
        id="cadastrar-btn"
        texto="CADASTRAR-SE"
        acao={() => {
          document.getElementById("cadastro")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
          />
      </div>
      </nav>
    </header>
  );
}

export default Header;
