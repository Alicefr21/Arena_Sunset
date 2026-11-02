import "./Button.css";

const Button = ({ id, texto, acao, tipo = "button" }) => {
  return (
    <button
      id={id}
      type={tipo}
      onClick={acao}
      className="button"
    >
      {texto}
    </button>
  );
};

export default Button;
