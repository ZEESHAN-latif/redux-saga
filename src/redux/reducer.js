import {
    ADD_TO_CART,
    EMPTY_CART,
    REMOVE_TO_CART
} from "./types"


export const cartData = (data = [], action) => {

    // if (action.type === ADD_TO_CART) {
    //     console.log("Reducer called", action)
    //     return action.data
    // } else {
    //     return 'abc'

    // }

    switch (action.type) {
        case ADD_TO_CART:
            console.log("Add to cart Reducer called", action)
            return [action.data, ...data];

        case REMOVE_TO_CART:
            //    data.length =  data.length? data.length - 1:[];
            console.log("Remove to cart reducer called", action)
            const removeItem = data.filter((item)=> item.id !== action.data)
            return [...removeItem];

        case EMPTY_CART:
            console.log("Empty to cart reducer called", action)
            data.length = [];
            return [...data];

        default:
            return data;

    }
}


