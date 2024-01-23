import axios from "axios"

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_FILTERED = "GET_PRODUCTS_FILTERED";
export const GET_PRODUCTS_FILTERED_BY_CAT = "GET_PRODUCTS_FILTERED_BY_CAT";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";

const URL_DEPLOY = "https://kioskomechi.up.railway.app/"
const URL_LOCAL = "http://localhost:3001/"

const USER_ID = 123;
const baseURL = URL_DEPLOY
/* const products = [{
    name: "Pan Rallado",
    price: 1000,
    brand: ["Preferido"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Pan+Rallado.png",
    category: "almacen",
    company: [""]
    
},{
    name: "Queso Rallado Grande",
    price: 1800,
    brand: ["LaSerenisima"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/queso+rallado+grande.jpg",
    category: "almacen",
    company: ["Serenisima"]
},{
    name: "Pan Dulce",
    price: 2500,
    brand: ["Arcor"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Arcor+Pan+Dulce.png",
    category: "almacen",
    company: [""]
    
},{
    name: "Termo",
    price: 1000,
    brand: ["Taragui"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/termo+taragui.jpg",
    category: "almacen",
    company: [""]
    
},{
    name: "Queso Rallado Pequeño",
    price: 800,
    brand: ["LaSerenisima"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/queso+rallado+peque%C3%B1o+la+serenisima.png",
    category: "almacen",
    company: [""]

},{
    name: "Yerba Mini",
    price: 500,
    brand: ["Taragui"],
    quantity: "500g",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+taragui+mini.png",
    category: "almacen",
    company: [""],
    
},{
    name: "Sobres Endulzantes Edulcorante",
    price: 1200,
    brand: ["Hileret"],
    quantity: "",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/sobres+de+endulzante+hileret.jpg",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 2300,
    brand: ["Playadito"],
    quantity: "1kg",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1700,
    brand: ["La Tranquera"],
    quantity: "1kg",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    category: "almacen",
    company: [""]
},{
    name: "Yerba",
    price: 1900,
    brand: ["Amanda"],
    quantity: "1kg",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1700,
    brand: ["Piporé"],
    quantity: "1kg",
    img:"https://kiosko-mechi.s3.us-east-2.amazonaws.com/Productos-Almacen/Yerba+playadito+mini.png",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1700,
    brand: ["Cruz de Malta"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 2300,
    brand: ["Rosamonte"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 0,
    brand: ["La cumbrecita"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1300,
    brand: ["Cachamate"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1600,
    brand: ["CBSé"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1900,
    brand: ["Unión"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Yerba",
    price: 1700,
    brand: ["Nobleza Gaucha"],
    quantity: "1kg",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Aceite",
    price: 2000,
    brand: ["Natura"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Aceite",
    price: 1800,
    brand: ["Legitimo"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Fideos",
    price: 1300,
    brand: ["Lucchetti"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Fideos",
    price: 2000,
    brand: ["Matarazzo"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Fideos",
    price: 1600,
    brand: ["Don Vicente"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Vino",
    price: 1000,
    brand: [""],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Mermelada Durazno",
    price: 1800,
    brand: ["Arcor"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Mermelada Ciruela",
    price: 1800,
    brand: ["Arcor"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Mermelada Damasco",
    price: 1800,
    brand: ["Arcor"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Mermelada Durazno",
    price: 1600,
    brand: ["BC"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Mermelada Frutilla",
    price: 2400,
    brand: ["BC"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Mermelada Frutos Rojos",
    price: 2400,
    brand: ["BC"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café Dolca Cortado",
    price: 0,
    brand: ["Nescafé"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Té Tilo",
    price: 600,
    brand: ["La Virginia"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Té Cedrón",
    price: 600,
    brand: [""],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Manzanilla",
    price: 600,
    brand: ["Taragui"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Té Clásico Negro Virgin Islands",
    price: 600,
    brand: ["La Virginia"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café en Saquito",
    price: 200,
    brand: ["La Virginia"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café Molido",
    price: 0,
    brand: ["La Virginia"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café Descafeinado",
    price: 4300,
    brand: ["Nescafé"],
    quantity: "100g",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café Instantaneo",
    price: 3300,
    brand: ["La Virginia"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café Dolca Suave",
    price: 3400,
    brand: ["Nescafé"],
    quantity: "170g",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Café Instantaneo",
    price: 3200,
    brand: ["Morenita"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Leche en Polvo Liviana",
    price: 1900,
    brand: ["La Serenisima"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Leche en Polvo Clásico",
    price: 2300,
    brand: ["La Serenisima"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Edulcorante",
    price: 1600,
    brand: ["Hileret"],
    quantity: "250g",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Atún",
    price: 2900,
    brand: ["Campagnola"],
    quantity: "",
    img:"",
    category: "almacen",
    company: [""]
    
},{
    name: "Paté",
    price: 300,
    brand: ["Swift"],
    quantity: "90g",
    img:"",
    category: "almacen",
    company: [""]
    
}] */

/* export const getProducts = () => {
    return function(dispatch) {
    
    dispatch({type: "GET_PRODUCTS", payload: products})
     
    }
}; */

export const getProducts = () => {
    return function (dispatch) {
        return axios.get(`${baseURL}products`)
            .then(e => e.data)
            .then(res => dispatch({ type: "GET_PRODUCTS", payload: res }))

    }
};

export const getProductsFiltered = (name) => {
    return { type: "GET_PRODUCTS_FILTERED", payload: name }

};

export const getProductsFilteredByCat = (category) => {
    return { type: "GET_PRODUCTS_FILTERED_BY_CAT", payload: category }

};

export const updateProducts = (json) => {
    return function (dispatch) {
        return axios.put(`${baseURL}products`, json)
            .then(e => e.data)
            .then(res => dispatch({ type: "UPDATE_PRODUCTS", payload: res }))

    }
}

export const postNewProduct = (json) => {
    return function (dispatch) {
        return axios.post(`${baseURL}images/newProduct`, json, {
            headers: {
                "x-user-id": USER_ID
            }
        })
            .then(e => e.data)
            .then(res => dispatch({ type: "POST_NEW_PRODUCT", payload: res }))

    }
};
