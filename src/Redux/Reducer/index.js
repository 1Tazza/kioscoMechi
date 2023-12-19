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
              const brandMatches = product.brand.some(brand => brand.toLowerCase().includes(name.toLowerCase()));
              return productNameMatches || brandMatches;
            });
          }
        

        const filteredProducts = brandFilter(state.products, action.payload);
        
        return{...state, filProducts: filteredProducts}
    }

    else {return state}
}