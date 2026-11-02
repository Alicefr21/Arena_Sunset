
import "./Diferenciais.css";
import Button from "./Button";

function Diferenciais() {
  return (
    <section id="diferenciais" className="diferenciais">
      <div className="diferenciais-conteudo">
        <div className="diferenciais-intro">
          <h2>Muito além da quadra.</h2>

          <p>
            Uma estrutura para quem vem jogar e para
            quem vem junto. Aqui, o programa é para
            a família toda.
          </p>

        
          <Button
            id="diferenciais-cta"
            texto="VEM PARA A ARENA"
            acao={() => {
              document.getElementById("cadastro")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />

        </div>

        <div className="diferenciais-grid">
          <div className="diferencial-card">
            <h3>Quadras cobertas e descobertas</h3>
            <p>
              Diferentes espaços para viver o seu
              esporte na areia.
            </p>
          </div>

          <div className="diferencial-card">
            <h3>Vestiários e Duchas</h3>
            <p>
              Conforto para chegar, jogar e seguir
              o seu dia.
            </p>
          </div>

          <div className="diferencial-card">
            <h3>Espaço Kids</h3>
            <p>
              Um espaço para os pequenos também
              curtirem a arena.
            </p>
          </div>

          <div className="diferencial-card">
            <h3>Lanchonete e Área Social</h3>
            <p>
              Porque a boa companhia continua
              depois do jogo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;
