import { useEffect, useState } from "react"
import {useDispatch, useSelector} from  "react-redux"
import { GenericCard } from "../GenericCard/GenericCard"
import c from "./home.module.css"
import Card from "../Card/Card"
import Modal from "../CardModal/CardModal"
import SearchBar from "../SearchBar/SearchBar"
import * as actions from "../../Redux/Actions"

export default function Home() {
    /* 
     const categories = [{name: "Almacén", img: "url"},{name: "Snacks", img: "url"},{name: "Gaseosas", img: "url"},{name: "Lacteos", img: "url"},{name: "Limpieza", img: "url"},{name: "Cigarros y Tabaco", img: "url"}] */
    
    const dispatch = useDispatch()

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [categoriesOpen, setCategoriesOpen] = useState(true);

    const openModal = (product) => {
      setSelectedProduct(product);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setModalOpen(false);
    };

   
    const products = useSelector( state => state.products)

    const filProducts = useSelector( state => state.filProducts)

    useEffect(() => {
        dispatch(actions.getProducts())
      }, [dispatch]);

    return(<div>

    <SearchBar setCategoriesOpen={setCategoriesOpen}/>

   {categoriesOpen ? <div className={c.categories}>
    <div>
    {GenericCard("Almacén","https://kiosko-mechi.s3.us-east-2.amazonaws.com/almacen-ok.png")}
    </div>
    <div>
    {GenericCard("Snacks","https://kiosko-mechi.s3.us-east-2.amazonaws.com/Snacks.png")}
    </div>
    <div>
    {GenericCard("Gaseosas","https://kiosko-mechi.s3.us-east-2.amazonaws.com/Gaseosas4.jpg")}
    </div>
    <div>
    {GenericCard("Lácteos", "https://kiosko-mechi.s3.us-east-2.amazonaws.com/Lacteos3.png")}
    </div>        
    <div>
    {GenericCard("Limpieza","https://kiosko-mechi.s3.us-east-2.amazonaws.com/Higiene.png")}
    </div>        
    <div>
    {GenericCard("Cigarros y Tabaco", "https://kiosko-mechi.s3.us-east-2.amazonaws.com/Cigarros3.png")}
    </div>        
   </div> : null}
      
   <div className={c.products}>
    {filProducts.length > 0 ? filProducts.map(el => <div key={el.id} onClick={() => openModal(el)}><Card id={el.id} name={el.name} brand={el.brand} price={el.price} img={el.img}/></div> ) : products.map(el => <div key={el.id} onClick={() => openModal(el)}><Card id={el.id} name={el.name} brand={el.brand} price={el.price} img={el.img}/></div> ) }
   </div>

   {modalOpen && (
        <Modal closeModal={closeModal} product={selectedProduct} />
      )}

    </div>)
}