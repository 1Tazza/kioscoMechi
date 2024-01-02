import React, { useState } from "react";
import c from "./cardmodal.module.css"; 
import * as actions from "../../Redux/Actions"
import { useDispatch } from "react-redux";

const Modal = ({ closeModal, product }) => {

  const dispatch = useDispatch()

  const [editionState, setEditionState] = useState(false)

  const [productState, setProductState] = useState({
    id: product.id,
    name: product.name,
    price: product.price
  })

  const handleInfoChange = (e) => {
    setProductState( (prevInfo) => ({...prevInfo, [e.target.name]: e.target.value})
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductState( (prevInfo) => ({...prevInfo, price: parseInt(productState.price)}))
    dispatch(actions.updateProducts(productState))
  }

  return (
  
    <div className={c.modalOverlay} onClick={closeModal}>

    { editionState === false ? (
      <div className={c.modalContent} onClick={(e) => e.stopPropagation()}>
        <div>
         <h2>{product.name} {product.brand}</h2>
         <p>Precio: {product.price}</p>
         <button onClick={closeModal}>Cerrar</button>

         <button onClick={() => setEditionState(true)} >Editar</button>
        </div>
         
        <div >
          <img src={product.img} className={c.img} alt="" />
        </div>

      </div>) : (<div className={c.modalContent} onClick={(e) => e.stopPropagation()}>
      

      <button onClick={() => setEditionState(false)}>Volver</button>

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
        <input type="text" id="nombre" name="nombre" value={product.brand} disabled/>
        </div>

        <button>Guardar</button>
      </form>


      </div>)}
     

    </div>



  );
};

export default Modal;