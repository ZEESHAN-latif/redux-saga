import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./types"

export const addToCart = (data) => {
    console.log("addToCart Action called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.log(" removeToCart Action called", data)
    return {
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = (data) => {
    console.log("emptyCart Action called", data)
    return {
        type: EMPTY_CART,
        data
    }
}