import { useState, useEffect } from "react";
import "./ListLike.css";
import { v4 as uuid } from "uuid";

function ListLike({ titleApi }) {

  
  const [items, setItems] = useState([]);
  let idUnico = uuid();
  
  // Funcion de crear y guardar en LocalStorage
  
  const crearTitulo = () => {
    const nuevoTitulo = {
      title: titleApi,
    };
    setItems([...items, nuevoTitulo]);
  };
  useEffect(() => {
    localStorage.setItem("peli", JSON.stringify(items));
  }, [items]);
  


  return (
    <>
      <div className="divLike">
        <h1>Mi lista</h1>
        <button onClick={crearTitulo}>Guardar</button>
        <ul>
          {items.map((item) => (
            <li key={idUnico}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListLike;
