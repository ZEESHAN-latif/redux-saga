import { GET_PRODUCT, SEARCH_PRODUCTS } from "./types"


export const getProduct =  () => {
 
    return {
        type: GET_PRODUCT,
    }
}

export const searchProduct =  (query) => {
 
    return {
        type: SEARCH_PRODUCTS,
        query
    }
}

