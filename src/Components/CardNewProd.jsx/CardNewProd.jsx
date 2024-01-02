import React, { useState } from "react";
import c from "./cardnewprod.module.css"; 
import Uploads from "../Uploads/Uploads";

const CardNewProd = ({ closeModal}) => {



  const [productState, setProductState] = useState({
    name: "",
    price: null,
    img: "",
    brand: "",
    categories: ""
  })

  const handleInfoChange = (e) => {
    setProductState( (prevInfo) => ({...prevInfo, [e.target.name]: e.target.value})
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductState( (prevInfo) => ({...prevInfo, price: parseInt(productState.price)}))
    setProductState( (prevInfo) => ({...prevInfo, brand: [productState.brand]}))
    console.log("marca estado en array?",productState.brand)

  }

  function handleCategory(e) {
    setProductState( (prevInfo) => ({...prevInfo, categories: e.target.value}))
   
 }

  

  return (
  
    <div className={c.modalOverlay} onClick={closeModal}>

   <div className={c.modalContent} onClick={(e) => e.stopPropagation()}>
      

      <button onClick={closeModal}>Volver</button>

      <form onSubmit={handleSubmit}>

        <div>
        <label for="name"><h4>Nombre del Producto:</h4></label>
        <input type="text" id="name" name="name" value={productState.name} onChange={(e) => {handleInfoChange(e)}}/>
        </div>

        <div>
        <label for="price"><h4>Precio:</h4></label>
        <input type="text" id="price" name="price" value={productState.price} onChange={(e) => {handleInfoChange(e)}}/>
        </div>

        <div>
        <label htmlFor=""><h4>Marca:</h4></label>
        <input type="text" id="brand" name="brand" value={productState.brand} onChange={(e) => {handleInfoChange(e)}}/>
        </div>

        <div >
          <label htmlFor=""><h4>Categoria: </h4></label>
         <select onChange={(e) => handleCategory(e)}>
          <option value="" selected disabled >Ordenar por...</option>
          <option name="almacen" value="almacen">Almacén</option> 
          <option value="snacks">Snacks</option>
          <option value="gaseosas">Gaseosas</option> 
          <option value="lacteos">Lacteos</option>
          <option value="limpieza">Limpieza</option> 
          <option value="cigarros">Cigarros y Tabacos</option>
         </select>
       </div>

        <div>
        <Uploads state={productState}/>
        </div>

      </form>


      </div>
     

    </div>



  );
};

export default CardNewProd;