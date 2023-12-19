import axios from "axios"

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_FILTERED = "GET_PRODUCTS_FILTERED";

const products = [{
    name: "Pan Rallado",
    price: 1000,
    brand: ["Preferido"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Pan+Rallado.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Queso Rallado Grande",
    price: 1800,
    brand: ["LaSerenisima"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/queso+rallado+grande.jpg",
    categories: ["almacen"],
    company: ["Serenisima"]
},{
    name: "Pan Dulce",
    price: 2500,
    brand: ["Arcor"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Arcor+Pan+Dulce.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Termo",
    price: 1000,
    brand: ["Taragui"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/termo+taragui.jpg",
    categories: ["almacen"],
    company: [""]
},{
    name: "Queso Rallado Pequeño",
    price: 800,
    brand: ["LaSerenisima"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/queso+rallado+peque%C3%B1o+la+serenisima.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba Mini",
    price: 500,
    brand: ["Taragui"],
    quantity: "500g",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+taragui+mini.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Sobres Endulzantes Edulcorante",
    price: 1200,
    brand: ["Hileret"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/sobres+de+endulzante+hileret.jpg",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 2300,
    brand: ["Playadito"],
    quantity: "500g",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1700,
    brand: ["La Tranquera"],
    quantity: "500g",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1900,
    brand: ["Amanda"],
    quantity: "500g",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1700,
    brand: ["Piporé"],
    quantity: "500g",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1700,
    brand: ["Cruz de Malta"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 2300,
    brand: ["Rosamonte"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 0,
    brand: ["La cumbrecita"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1300,
    brand: ["Cachamate"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1600,
    brand: ["CBSé"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1900,
    brand: ["Unión"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Yerba",
    price: 1700,
    brand: ["Nobleza Gaucha"],
    quantity: "500g",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Aceite",
    price: 2000,
    brand: ["Natura"],
    quantity: "",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Aceite",
    price: 1800,
    brand: ["Legitimo"],
    quantity: "",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Fideos",
    price: 1300,
    brand: ["Lucchetti"],
    quantity: "",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Fideos",
    price: 2000,
    brand: ["Matarazzo"],
    quantity: "",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "Fideos",
    price: 1600,
    brand: ["Don Vicente"],
    quantity: "",
    img:"",
    categories: ["almacen"],
    company: [""]
},{
    name: "",
    price: 1000,
    brand: [""],
    quantity: "",
    img:"",
    categories: ["almacen"],
    company: [""]
},]

export const getProducts = () => {
    return function(dispatch) {
    /* return axios.get("http://localhost:3001/api")
    .then(e => e.data)
    .then(res =>  )*/
    dispatch({type: "GET_PRODUCTS", payload: products})
     
    }
};

export const getProductsFiltered = (name) => {
    return {type: "GET_PRODUCTS_FILTERED", payload: name}
     
};