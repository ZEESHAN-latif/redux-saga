import {  SET_PRODUCTS } from "./types";


export const productData = (data = [], action) => {



    switch (action.type) {

            case SET_PRODUCTS:
                console.log("SET_PRODUCTS in reducer", action.data)
                return [...action.data]

        default:
            return data;

    }
}


