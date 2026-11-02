
import "./Modalidades.css";

function Modalidades() {
  return (
    <section id="modalidades" className="modalidades">
      <div className="modalidades-cabecalho">
        <h2>Nossas Modalidades</h2>
        <p>
          Escolha seu esporte favorito e venha jogar com a gente!
        </p>
      </div>

      <div className="modalidades-cards">
        <div className="modalidade-card">
          <img
            src="/images/beach-tennis.jpg"
            alt="Partida de beach tennis"
          />

          <h3>Beach Tennis</h3>

          <p>
            Esporte dinâmico praticado na areia que mistura elementos do tênis tradicional, do vôlei de praia e do badminton.
          </p>
        </div>

        <div className="modalidade-card">
          <img
            src="/images/volei.jpg"
            alt="Partida de vôlei de praia"
          />

          <h3>Vôlei de Praia</h3>

          <p>
            O vôlei de praia é um esporte de duplas na areia onde o objetivo é rebater a bola por cima da rede e fazê-la tocar a quadra adversária.
          </p>
        </div>

        <div className="modalidade-card">
          <img
            src="/images/futevolei.jpg"
            alt="Partida de futevôlei"
          />

          <h3>Futevôlei</h3>

          <p>
            O futevôlei é um esporte de areia jogado em duplas onde se passa a bola sobre a rede sem usar as mãos ou os braços.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Modalidades;
