import { useState } from "react"
import { useDispatch } from "react-redux"
import c from "./uploads.module.css"
import useMutation from "../../hooks/useMutation"
/* import useQuery from "../../hooks/useQuery" */

const Uploads = ({state, fileState}) => {
   
const dispatch = useDispatch()
    const URL = "/images/newProduct"

    const ErrorText = (children, ...props) => (
        <p className={c.error}>
            {children}
        </p>
    )
    const [imageUploaded, setImageUploaded] = useState(false);

    const {
        mutate: uploadImage, 
        isLoading: uploading, 
        error: uploadError} = useMutation({url: URL})

   /*  const {data: imageUrl=[], isLoading: imageLoading, error: fetchError } = useQuery(URL); */

    const validFileTypes = ["image/jpg","image/jpeg","image/png"]

    const [error, setError] =  useState("")

    const handleUploadImg = async(e) => {

        /* const file = e.target.files[0]; */
        if(!fileState) {
            setError("Primero debe seleccionar una imagen")
            e.preventDefault()
              return;
        }

        const file = fileState
        const obj = state

        if(!validFileTypes.find(type => type === file.type)) {
              setError("La imagen debe ser de formato JPG/PNG")
              e.preventDefault()
              return;
        }

        const form = new FormData();
        form.append("image", file)
        form.append("obj", JSON.stringify(obj))
        await uploadImage(form)

        setImageUploaded(true);
      }
     
    return(<div>

    
         <div class={c.customUploadBtn}>
            {/* <input isLoading={uploading} type="file" id={c.fileInput} onChange={handleUploadImg}/> */}
            <button  isLoading={uploading} id={c.fileInput} onClick={handleUploadImg}>Crear</button>
         </div>

         {error && ErrorText(error)}

         {uploadError && ErrorText(uploadError)}



         {uploadError && ErrorText(uploadError)}

    </div>)
}

export default Uploads;