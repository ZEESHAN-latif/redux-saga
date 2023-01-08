import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../redux/action";
import { useSelector } from "react-redux";
import { getProduct } from "../redux/productAction";
import { useEffect } from "react";


const Main = () => {

    useEffect(() => {
        dispatch(getProduct())
    }, 
    // eslint-disable-next-line
    [])

    const dispatch = useDispatch();
    const reduxData = useSelector((state) => state.productData);
    console.log("redux data show products in Main come from saga", reduxData)


    return (
        <div className="App">
          

            <div className="product-container">
                {
                    reduxData.map((item) =>

                        <div className="product-item shadow" key={item.id}>
                            <img src={item.photo} alt="item1" />

                            <div>
                                Id:{item.id}
                            </div>

                            <div>
                                Name:{item.name}
                            </div>

                            <div>
                                Price:{item.price}
                            </div>

                            <div>
                                Brand:{item.brand}
                            </div>

                            <div>
                                <div>
                                    <button className="btn btn-primary ms-1 text-white" onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                                    <button className="btn btn-danger ms-1 text-white" onClick={() => dispatch(removeToCart(item.id))}>Remove to cart</button>
                                </div>

                            </div>



                        </div>


                    )
                }
            </div>

        </div>
    );
}


export default Main;