import { useState } from "react"
import c from "./uploads.module.css"
import useMutation from "../../hooks/useMutation"
/* import useQuery from "../../hooks/useQuery" */

const Uploads = ({state}) => {
    

    const URL = "/images/newProduct"

    const ErrorText = (children, ...props) => (
        <p className={c.error}>
            {children}
        </p>
    )

    const {
        mutate: uploadImage, 
        isLoading: uploading, 
        error: uploadError} = useMutation({url: URL})

   /*  const {data: imageUrl=[], isLoading: imageLoading, error: fetchError } = useQuery(URL); */

    const validFileTypes = ["image/jpg","image/jpeg","image/png"]

    const [error, setError] =  useState("")

    const handleUploadImg = async(e) => {

        const file = e.target.files[0];
        const obj = state
        console.log(obj)

        if(!validFileTypes.find(type => type === file.type)) {
              setError("La imagen debe ser de formato JPG/PNG")
              return;
        }

        const form = new FormData();
        form.append("image", file)
        form.append("obj", JSON.stringify(obj))
        await uploadImage(form)
      }
     
    return(<div>

    
         <div class={c.customUploadBtn}>
            <input isLoading={uploading} type="file" id={c.fileInput} onChange={handleUploadImg}/>
            <label for="fileInput">
             Crear
            </label>
         </div>

         {error && ErrorText(error)}

         {uploadError && ErrorText(uploadError)}



         {uploadError && ErrorText(uploadError)}

    </div>)
}

export default Uploads;