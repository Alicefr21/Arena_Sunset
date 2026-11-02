
import { useState } from "react";
import "./Cadastro.css";
import Button from "./Button";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !telefone.trim() || !modalidade) {
      setMensagem("erro");
      return;
    }

    setMensagem("sucesso");

    setNome("");
    setEmail("");
    setTelefone("");
    setModalidade("");
  }

  return (
    <section id="cadastro" className="cadastro">
      <div className="cadastro-conteudo">
        <div className="cadastro-intro">
          <h2>Garanta seu lugar na areia!</h2>

          <p>
            Preencha os dados ao lado para ficar por dentro dos eventos,
            torneios e agendamentos da nossa arena.
          </p>

          <p>O seu próximo treino começa aqui!</p>
        </div>

        <div className="cadastro-formulario">
          <h2>Faça seu Cadastro!</h2>

          <form onSubmit={handleSubmit}  noValidate>
            <div className="campo">
              <label htmlFor="nome">
                Nome Completo <span>*</span>
              </label>

              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="email">
                E-mail <span>*</span>
              </label>

              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="telefone">
                Telefone <span>*</span>
              </label>

              <input
                type="tel"
                id="telefone"
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="modalidade">
                Modalidade de Interesse <span>*</span>
              </label>

              <select
                id="modalidade"
                value={modalidade}
                onChange={(event) => setModalidade(event.target.value)}
                required
              >
                <option value="">Selecione uma modalidade</option>
                <option value="Beach Tennis">Beach Tennis</option>
                <option value="Vôlei de Praia">Vôlei de Praia</option>
                <option value="Futevôlei">Futevôlei</option>
              </select>
            </div>

            <Button
                id="cadastro-btn"
                texto="CADASTRAR AGORA"
                tipo="submit"
                />

            {mensagem === "sucesso" && (
              <p className="mensagem-sucesso" role="status">
                ✔️ Cadastro realizado com sucesso!
              </p>
            )}

            {mensagem === "erro" && (
              <p className="mensagem-erro" role="alert">
                ⚠️ Cadastro inválido. Preencha todos os campos obrigatórios.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
