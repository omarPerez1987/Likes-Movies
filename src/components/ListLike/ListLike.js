import { useState} from "react";
import "./ListLike.css";

function ListLike({ titleApi }) {
  const [crear, setCrear] = useState([]);
  // const [elimino, setElimino] = useState([]);

  //Funcion generar id unico
  const idUnico = () => {
    const num1 = Math.floor(Math.random() * 10000);
    const num2 = Math.floor(Math.random() * 10000);
    return `${num1}-${num2}`;
  };

  // Funcion de crear

  const crearTitulo = () => {
    const nuevoTitulo = {
      title: titleApi,
      key: idUnico()
    };
    setCrear([...crear, nuevoTitulo]);
  };


// Funcion eliminar 

const eliminar = (key) => {
  const eliminarTitulo = crear.filter((item) => item.key !== key);
  setCrear(eliminarTitulo)
}




  return (
    <>
      <div className="divLike">
        <h1>Mi lista</h1>
        <button
          onClick={crearTitulo}
          id="guardarLista"
          type="button"
          className="btn btn-primary"
        >Guardar
        </button>

          {crear.map((item) =>(
            <div 
            key={item.key} 
            className="alert alert-secondary" 
            role="alert">
              {item.title}

            <i onClick={() => eliminar(item.key)} 
            // key={item.key} 
            className='bx bxs-trash' 
            id="boxicons">
            </i>

            </div> 
          ))}
      </div>
    </>
  );
}

export default ListLike;
