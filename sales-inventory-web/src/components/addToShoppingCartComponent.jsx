import React, {Component, useEffect, useState} from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Header from './header';
import Mobile from '../images/phone.png'
function AddToShoppingCartComponent() {
    let [totalAmount, setTotalAmount] = useState(0);
    const [items, setItems] = useState("");
    const [allCartDetails, setAllCartDetails] = useState([]);
    const [isPastDetails, setIsPastDetails] = useState(false);
    const [showShoppingCartModel, setShowShoppingCartModel] = useState(false);
    const [modelStatus, setModelStatus] = useState(true);
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [destination, setDestination] = useState('');
    const onOpenShoppingCartModel = () => setShowShoppingCartModel(true);
    const onCloseShoppingCartModel = () => setShowShoppingCartModel(false);

    const placeOrder = () => {
        let order = {
            items: items,
            userId: 1,
            totalAmount: totalAmount,
            pickUpLocation: pickUpLocation,
            destination: destination
        }

        axios.post('http://34.121.245.93:6091/shopping-cart/', order).then(res => {
            console.log('responce ', res);
        }).catch(err => {
            console.log('Error ', err);
        })
    }

    const ShoppingCartModel = () => (
        <Popup open={showShoppingCartModel}
            position="center">
            <div className='container model-radius'>
                <div className='row model-close-button'>
                    <i class="fa fa-times-circle"
                        onClick={
                            () => onCloseShoppingCartModel()
                        }
                        aria-hidden="true"></i>
                </div>
                <h4>My Cart</h4>
                <div className='card patient-card-popup'>
                    <div className="row tableHeader">
                        <div className="col-sm-6 tableHeaderItem"
                            onClick={
                                () => setModelStatus(false)
                        }>
                            {
                            modelStatus == false ? <p className='tableheaderBorder'>New</p> : <p>New</p>
                        }</div>
                        <div className="col-sm-6 tableHeaderItem"
                            onClick={
                                () => setModelStatus(true)
                        }>
                            {
                            modelStatus == true ? <p className='tableheaderBorder'>History</p> : <p>History</p>
                        }</div>
                    </div>
                    {
                    modelStatus == true ? <div>
                        <div className="row tableItemHeader">
                            <div className="col-sm 4">Order ID</div>
                            <div className="col-sm 4">Items</div>
                            <div className="col-sm 4">Total Amount</div>
                        </div>
                        {
                        allCartDetails.map((data) => {
                            return (
                                <div className="row tableItemBody">
                                    <div className="col-sm 4">
                                        {
                                        data.orderId
                                    }</div>
                                    <div className="col-sm 4">
                                        {
                                        data.items
                                    }</div>
                                    <div className="col-sm 4">
                                        {
                                        data.totalAmount
                                    }</div>
                                </div>
                            )
                        })
                    } </div> : <div>
                        <div className="row tableItemHeader">
                            <div className="col-sm-6">
                                Items
                            </div>
                            <div className="col-sm-6">
                                Total Amount
                            </div>
                        </div>
                        <div className="row tableItemBody">
                            <div className="col-sm-6">
                                {items} </div>
                            <div className="col-sm-6">
                                {totalAmount} </div>
                        </div>
                        <div className="row tableItemBody">
                            <div className="col-sm-10">
                                <div class="form-group">
                                    <input type="text"
                                        onChange={
                                            (e) => setPickUpLocation(e.target.value)
                                        }
                                        value={pickUpLocation}
                                        class="form-control "
                                        id="exampleFormControlInput1"
                                        placeholder="Insert Pickup Location"/></div>
                            </div>
                        </div>
                        <div className="row tableItemBody">
                            <div className="col-sm-10">
                                <div class="form-group">
                                    <input type="text"
                                        value={destination}
                                        onChange={
                                            (e) => setDestination(e.target.value)
                                        }
                                        class="form-control "
                                        id="exampleFormControlInput11"
                                        placeholder="Insert Destination"/></div>
                            </div>
                        </div>
                        <div className="row">
                            <button type="button"
                                onClick={
                                    () => placeOrder()
                                }
                                class="btn btn-success">Success</button>
                        </div>

                    </div>
                } </div>
            </div>
        </Popup>
    );;

    useEffect(() => {
        if (allCartDetails.length == 0) {
            axios.get('http://34.121.245.93:6091/shopping-cart/').then(res => {
                setAllCartDetails(res.data);
                console.log('data', res.data);
                if (res.data.length > 0) {
                    setIsPastDetails(true);
                } else {
                    setIsPastDetails(false);
                }
            }).catch(err => {
                console.log("Error ", err);
                setIsPastDetails(false);
            });
        }
    }, []);

    const changeVariableState = (value, item) => {
        setTotalAmount(totalAmount + value);
        setItems(items + item + ",");
    }

    return (
        <div className=' container-fluid view-patient-details-body'>
            <Header></Header>
            <br></br>
            <ShoppingCartModel/>
            <a class="fixedButton"
                onClick={
                    () => onOpenShoppingCartModel()
            }>
                <div class="roundedFixedBtn">
                    <h5 className='roundedFixedBtn-text'>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        &nbsp; Go To Cart</h5>

                </div>
            </a>

            {/* 1st row */}
            <div className='row mt-5'>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 1")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 2")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 3")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 4")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* 2nd row */}
            <div className='row mt-2'>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 5")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 6")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 7")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 8")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* 3nd row */}
            <div className='row mt-2'>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 9")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 10")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 11")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 mt-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Mobile}
                                    className='cart-image'/>
                            </div>
                            <div className="col-sm-6">
                                Mobile Phone
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning"
                            onClick={
                                () => changeVariableState(1000, "Mobile Phone 12")
                        }>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            &nbsp;Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToShoppingCartComponent;
