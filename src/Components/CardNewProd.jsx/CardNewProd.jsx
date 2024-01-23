import React, { useState,useEffect } from "react";
import {useDispatch} from  "react-redux"
import c from "./cardnewprod.module.css"; 
import * as actions from "../../Redux/Actions"
import useMutation from "../../hooks/useMutation"

const CardNewProd = ({ closeModal}) => {

 const dispatch = useDispatch()
 const [imageUploaded, setImageUploaded] = useState(false);

  const URL = "/images/newProduct"

  const ErrorText = (children, ...props) => (
      <p className={c.error}>
          {children}
      </p>
  )
  useEffect(() => {

    dispatch(actions.getProducts());
  
}, [dispatch, imageUploaded]);

  const {
      /* mutate: uploadImage,  */
      isLoading: uploading, 
      error: uploadError} = useMutation({url: URL})

 /*  const {data: imageUrl=[], isLoading: imageLoading, error: fetchError } = useQuery(URL); */

  const validFileTypes = ["image/jpg","image/jpeg","image/png"]

  const [error, setError] =  useState("")





  const [productState, setProductState] = useState({
    name: "",
    price: null,
    img: "",
    brand: "",
    category: ""
  })

  

  const [fileState, setfileState] = useState(null)

  const handleInfoChange = (e) => {
    setProductState( (prevInfo) => ({...prevInfo, [e.target.name]: e.target.value})
    );
  };

  const handleSubmit = async(e) => {
    setProductState( (prevInfo) => ({...prevInfo, price: parseInt(productState.price)}))
    setProductState( (prevInfo) => ({...prevInfo, brand: [productState.brand]}))
    await handleUploadImg(e);

  }

  function handleCategory(e) {
    setProductState( (prevInfo) => ({...prevInfo, category: e.target.value}))
   
 }

  const handleImg = (e) => {
    const file = e.target.files[0];

    setfileState(file)
  }


  const handleUploadImg = async(e) => {
    e.preventDefault()
    /* const file = e.target.files[0]; */
    if(!fileState) {
        setError("Primero debe seleccionar una imagen")
        e.preventDefault()
          return;
    }

    const file = fileState
    const obj = productState

    if(!validFileTypes.find(type => type === file.type)) {
          setError("La imagen debe ser de formato JPG/PNG")
          e.preventDefault()
          return;
    }

    const form = new FormData();
    form.append("image", file)
    form.append("obj", JSON.stringify(obj))
    /* await uploadImage(form) */
    setImageUploaded(true);
    dispatch(actions.postNewProduct(form))
closeModal()

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

        <div>
          <label htmlFor=""><h4>Categoria: </h4></label>
         <select onChange={(e) => handleCategory(e)}>
          <option value="" selected disabled >Ordenar por...</option>
          <option name="almacen" value="almacen">Almacén</option> 
          <option value="snacks">Snacks</option>
          <option value="gaseosas">Gaseosas</option> 
          <option value="lacteos">Lacteos</option>
          <option value="limpieza">Limpieza</option> 
          <option value="cigarros y tabaco">Cigarros y Tabacos</option>
         </select>
       </div>

        <div>
            <input type="file" onChange={handleImg}/>
         </div>


     <div>
        <div class={c.customUploadBtn}>
            {/* <input isLoading={uploading} type="file" id={c.fileInput} onChange={handleUploadImg}/> */}
            <button  isLoading={uploading} id={c.fileInput} >Crear</button>
         </div>

         {error && ErrorText(error)}

         {uploadError && ErrorText(uploadError)}



         {uploadError && ErrorText(uploadError)}
      </div>

      </form>


      </div>
     

    </div>



  );
};

export default CardNewProd;