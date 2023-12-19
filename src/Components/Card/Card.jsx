import c from "./card.module.css"

export default function Card(props){



    return(<div className={c.box}>

        <div className={c.containerImg}>
        <img className={c.img} src={props.img} alt="" />
        </div>

        <div className={c.boxDescription}>
         <div className={c.name}>
            <p className={c.margin}>{props.name} {props.brand}</p>
         </div>
    
         <div className={c.price}>${props.price}</div>
        </div>

    </div>)
}