
import "./ListLike.css";

function ListLike({ titulo, clic }) {

  let clicLike = clic;
  let arrayLista = [];

  const guardarLS = () => {
      arrayLista.push(clicLike);
      localStorage.setItem("peli", JSON.stringify(arrayLista));
  };
  guardarLS();

  const mostrarLS = () => {
    
  };

  return (
    <>
      <div className="divLike">
        <h1>Mi lista</h1>
        <div className="alert alert-success" role="alert">
          {arrayLista}
        </div>
      </div>
    </>
  );
}

export default ListLike;
