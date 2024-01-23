import c from "./genericCard.module.css"
import { useDispatch } from "react-redux"
import * as actions from "../../Redux/Actions"
export function GenericCard(name,img, category) {
     
    const dispatch = useDispatch()


    function handleCategory() {
        console.log(name)
        dispatch(actions.getProductsFilteredByCat(name))
    }

    return(<div className={`${c.boxGeneric} ${c.center}`}>
    <button onClick={handleCategory} className={c.button}>
     
     <div className={c.boxImg}>
     <img src={img} className={c.img} alt="" />
     </div>


     <div className={c.text}>{name}</div>

    </button>           
    </div>)
}