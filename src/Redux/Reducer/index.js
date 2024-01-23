const initialState = {
    products: [],
    characters: [],
    filProducts: [],
    currentPage: 1,
    itemsPerPage: 9
}

export default function rootReducer(state = initialState, action) {
    if(action.type === "GET_PRODUCTS") {
        return {...state, products: action.payload}
    }
    else if (action.type === "GET_PRODUCTS_FILTERED") {

        function brandFilter(products, name) {
            return products.filter(product => {
              
              const productNameMatches = product.name.toLowerCase().includes(name.toLowerCase());

              const brandMatches = product.brand.some(brand => {
                if(typeof(brand) === "object") { return brand[0].toLowerCase().includes(name.toLowerCase()) }
                else if(typeof(brand) === "string") {  return brand.toLowerCase().includes(name.toLowerCase()) }
               
            });
              return productNameMatches || brandMatches;
            });
          }
        

        const filteredProducts = brandFilter(state.products, action.payload);
        
        return{...state, filProducts: filteredProducts}
    }

    else if (action.type === "GET_PRODUCTS_FILTERED_BY_CAT") {

        const filteredProducts = state.products.filter(e => e.category === action.payload.toLowerCase())
        console.log(filteredProducts)
        return{...state, filProducts: filteredProducts}
    }

    else if(action.type === "UPDATE_PRODUCTS") {
        //In order to find the one product that didn´t update in the state array 'filProducts'
      

        return {...state, products: action.payload}
    }

    else if (action.type === "POST_NEW_PRODUCT") {
        // Utiliza concat para crear un nuevo array con el nuevo producto
        const newProductsArray = state.products.concat(action.payload);
    
        // Devuelve un nuevo objeto de estado con el nuevo array de productos
        return {...state, products: newProductsArray}
    }

    else {return state}
}