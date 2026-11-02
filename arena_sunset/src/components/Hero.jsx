
import "./Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-conteudo">
        <h1>A sua arena de esportes de <br />
            areia!</h1>

        <p>
        Beach Tennis, Vôlei de Praia e Futevôlei. Um lugar para jogar, <br />
        reunir os amigos e curtir com a família.
        </p>

        <Button
        id="hero-cadastro-btn"
        texto="QUERO ME CADASTRAR"
        acao={() => {
          document.getElementById("cadastro")?.scrollIntoView({
            behavior: "smooth",
    });
  }}
/>
      </div>
    </section>
  );
}

export default Hero;
