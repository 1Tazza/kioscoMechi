import { useState, useEffect } from "react"
import { useDispatch} from "react-redux"
import * as actions from "../../Redux/Actions"
import c from "./searchbar.module.css"
import CardNewProd from "../CardNewProd.jsx/CardNewProd"

export default function SearchBar({setCategoriesOpen}) {

const dispatch = useDispatch()

const [name, setName] = useState("")


const [modalOpen, setModalOpen] = useState(false);

useEffect(() => {
  // Este efecto se ejecuta cada vez que `name` cambia
  if (name.length > 0) {
    setCategoriesOpen(false);
  } else {
    setCategoriesOpen(true);
  }
}, [name, setCategoriesOpen]);

const openModal = (product) => {
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
};


const handleInputChange = (e) => {
  const value = e.target.value;
  setName(value);
  dispatch(actions.getProductsFiltered(value));
  };

return(<div className={c.padding}>
    
    <input className={c.input} value={name} onChange={e=> handleInputChange(e)} placeholder="Nombre.." type="text" />
    {/* <button className={c.button} onClick={() => name.length > 0 ? dispatch(actions.getDogByRace(name)): null}>Buscar</button> */}
    
    <button onClick={() => openModal()} >Crear Nuevo Producto</button>

     
    {modalOpen && (
        <CardNewProd closeModal={closeModal}  />
      )}


    </div>)
}