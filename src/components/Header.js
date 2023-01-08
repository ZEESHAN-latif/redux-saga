
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProduct } from "../redux/productAction";


const Header = () => {

    const dispatch = useDispatch();
    let result = useSelector((state) => state.cartData);
    console.log("Redux state show data in heder", result)

    return (
        <div className="header">

            <Link to="/"><h2>E-Comm</h2></Link>

            <div className="Input">
                <input type="text" placeholder="search product name" onChange={(e) => dispatch(searchProduct(e.target.value))}/>
            </div>


            <Link to="cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt="img" />
                </div>
            </Link>
        </div>
    )
}

export default Header;