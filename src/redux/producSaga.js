import { put, takeEvery } from "@redux-saga/core/effects";
import { GET_PRODUCT, SEARCH_PRODUCTS, SET_PRODUCTS } from "./types";


function* allProducts(){

   let data = yield fetch("http://localhost:3000/products");
    data = yield data.json();
    console.log("saga called", data)
    yield put({type:SET_PRODUCTS, data:data})
}

function* findProduct(data){

    let result = yield fetch(`http://localhost:3000/products?q=${data.query}`);
     result = yield result.json();
     console.log("saga called for search", result)
     yield put({type:SET_PRODUCTS, data:result})
 }




function* productSaga(){
yield takeEvery(GET_PRODUCT, allProducts)
yield takeEvery(SEARCH_PRODUCTS, findProduct)

};


export default productSaga;