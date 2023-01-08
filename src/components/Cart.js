import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/action";


const Cart = () => {

    const cartData = useSelector((state)=> state.cartData)
    const dispatch = useDispatch();
    const totalAmount = cartData.length && cartData.map((item)=>item.price).reduce((prev, next) => prev+next)
    const[edit, setEdit] = useState([])
    const[name, setName] = useState("")
    const[price, setPrice] = useState("")
    const[brand, setBrand] = useState("")
    console.warn("edit", edit)

    const updateFun = () => {
        alert("hello")

        let data = {
            name, price, brand
        }

        dispatch(addToCart(data))
    }

    return(
        <>
            <div className="shadow p-2 m-3 rounded">
                <h3 className="text-danger">Cart Details</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Table striped bordered hover variant="secondary">
                            <thead>
                                <tr>
                                    <th>No :</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Model</th>
                                    <th>quantity</th>
                                    <th >Operation Del</th>
                                    <th >Operation Upd</th>
                                    {/* <th>Update Operation</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {cartData.map((item, i) =>
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.brand}</td>
                                        <td><img src={item.photo} alt="missing" className="rounded-2" width="60px" height="60px" /></td>
                                        <td><button className="btn btn-success ms-1 text-white" onClick={() => {setEdit(item)}}>Edit</button></td>
                                        <td><button className="btn btn-danger ms-1 text-white" onClick={() => dispatch(removeToCart(item.id))}>Remove to cart</button></td>
                                        {/* <td><button onClick={() => deleteUser(item.id)} className="btn btn-danger">Delete</button>
                                            <Link to={"/update/" + item.id}><span className="btn ms-1 btn-success">Update</span></Link></td> */}
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="card">
                            <div className="shadow p-2 m-3 rounded">
                                <h3 className="text-danger">Payment Details</h3>
                            </div>
                            <div className="card-body">


                                <Table striped bordered bordered-primary hover variant="primary">
                                    <thead>
                                        <tr>
                                            <th>Total price</th>
                                            <th>Discount</th>
                                            <th>Total Bill</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Rs/: {totalAmount}</td>
                                            <td>Rs/: 999</td>
                                            <td>Rs/: {totalAmount? totalAmount - 999 : 0}</td>
                                        </tr>
                                        <tr>
                                            <td>Bill </td>
                                            <td colSpan="2" className="text-primary fw-bold">pkr : {totalAmount? totalAmount - 999 : 0}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <hr />
                                <div className="text-center">
                                    <input type="radio" name="cash" value="cashed" />visa
                                    <input type="radio" name="cash" value="ppal" />papaal
                                    <input type="radio" name="cash" value="credit" />Credit
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
            {/* <Footer style={{bottom: "0px"}}/> */}

            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" >
                    <Form.Label>Model Name</Form.Label>
                    <Form.Control type="text" defaultValue={edit?.name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Model name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" defaultValue={edit?.price} onChange={(e) => setPrice(e.target.value)}  className="form-control" placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" defaultValue={edit?.brand} onChange={(e) => setBrand(e.target.value)}  className="" placeholder="Enter quantity" />
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={() => updateFun()}>
                    Update
                </Button>
            </Form>
        </>
    )
}

export default Cart;