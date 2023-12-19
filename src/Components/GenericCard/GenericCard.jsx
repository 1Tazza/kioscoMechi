import c from "./genericCard.module.css"

export function GenericCard(name,img, category) {
     


    return(<div className={c.boxGeneric}>
    <button className={c.button}>
     
     <div className={c.boxImg}>
     <img src={img} className={c.img} alt="" />
     </div>


     <div className={c.text}>{name}</div>

    </button>           
    </div>)
}