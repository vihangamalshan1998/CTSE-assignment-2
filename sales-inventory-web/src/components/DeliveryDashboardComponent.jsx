import React, {Component} from 'react';
import Header from './header';
import axios from "axios";
import SalesInventoryServices from "../services/SalesInventoryServices";
import image from "../images/online-delivery.jpg";

class DeliveryDashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delivery: [],
            orderId: '',
            deliveryCharges: '',
            status: '',
            additionalComments: '',
            deliveryId:'',

            viewOrderId: '',
            viewDeliveryCharges: '',
            viewStatus: '',
            viewAdditionalComments: '',
            ID: ''
        }
        this.EditOrderIdHandler = this.EditOrderIdHandler.bind(this);
        this.EditDeliveryChargesHandler = this.EditDeliveryChargesHandler.bind(this);
        this.EditStatusHandler = this.EditStatusHandler.bind(this);
        this.EditAdditionalCommentsHandler = this.EditAdditionalCommentsHandler.bind(this);
    }
    //Delete delivery
    deleteDelivery(deliveryId){
        SalesInventoryServices.deleteDeliveryDetails(deliveryId).then(res=>{
            this.setState({delivery: this.state.delivery.filter(delivery => delivery.deliveryId !==deliveryId)});
        })
    }
    //view delivery By ID
    viewDeliveryByID(e, deliveryId) {
        SalesInventoryServices.getDeliveryById(this.state.deliveryId).then((res)=>{
            let delivery =res.data[0];
            this.setState({
                deliveryId: delivery.deliveryId,
                orderId: delivery.orderId,
                deliveryCharges: delivery.deliveryCharges,
                status: delivery.status,
                additionalComments: delivery.additionalComments,
            })
        })
    }
    //update delivery
    updateDelivery = (e) =>{
        e.preventDefault();
        let delivery = {
            orderId: this.state.orderId,
            deliveryCharges: this.state.deliveryCharges,
            status: this.state.status,
            additionalComments: this.state.additionalComments,
        };

        console.log('delivery => ' + JSON.stringify(delivery));
        if(this.state.orderId !=='' && this.state.deliveryCharges!=='' && this.state.status!== ''){
            SalesInventoryServices.updateDelivery(delivery, this.state.deliveryId).then(res => {
                alert("Delivery Details Updated Successfully");
                this.props.history.push("/delivery");
                window.location.reload();
            })
        }else{
            alert("Please fill each required field");
        }
    }

    // get all deliveries
    componentDidMount(){
        SalesInventoryServices.getAllDeliveryDetails().then((res) => {
            console.log("XXXX",res.data);
            this.setState({ delivery: res.data});
        });
    }
    EditOrderIdHandler = (delivery)=> {
        this.setState({orderId: delivery.target.value});
    }
    EditDeliveryChargesHandler = (delivery)=> {
        this.setState({deliveryCharges: delivery.target.value});
    }
    EditStatusHandler = (delivery)=> {
        this.setState({status: delivery.target.value});
    }
    EditAdditionalCommentsHandler = (delivery)=> {
        this.setState({additionalComments: delivery.target.value});
    }

    render() {
        return (
            <div className="container-fluid">
                <Header></Header>
                <br/><br/><br/><br/>
                <div className="container">
                    <div className="row">
                        {/*Header*/}
                        <h3>All Delivery Details</h3>
                    </div>
                </div>
                <br/>
                <div className="container" style={{overflowY: "scroll", height:"500px"}}>
                    <div className="row">
                        {/*Display Student Details*/}
                        {
                            this.state.delivery.map(
                                delivery =>
                                    <div className="col-md-4">
                                        <div className="card mt-3 sellercard">
                                            <div className="product text-center mt-3">
                                                <div className="row">
                                                    <img src={image}/>
                                                    <h5>Order ID: {delivery.orderId}</h5>
                                                    <h5>Delivery Charges: Rs.{delivery.deliveryCharges}</h5>
                                                    <h6>Status: {delivery.status}</h6>
                                                    <h6>Additional Comments: {delivery.additionalComments}</h6>
                                                    <div className="col-md-6">
                                                        <button className="btn btn-warning btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdropupdate" onClick={e => this.viewDeliveryByID(e, delivery.deliveryId)}>
                                                            <i className="fas fa-search"></i>&nbsp;
                                                            View
                                                        </button>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button className="btn btn-danger btn-block" data-bs-target="" onClick={ () => this.deleteDelivery(delivery.deliveryId)}>
                                                            <i className="fas fa-search"></i>&nbsp;
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                            )}
                    </div>
                </div>
                {/*View Delivery Details Modal*/}
                <div className="container">
                    <div className="row">
                        <div className="modal fade" id="staticBackdropupdate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Add New Delivery</h5>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    <i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;
                                                    Student Info
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <i className="fa fa-lock" aria-hidden="true"></i></span>
                                                    <input type="text" value={this.state.orderId} onChange={this.EditOrderIdHandler} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <i className="fa fa-lock" aria-hidden="true"></i></span>
                                                    <input type="text" value={this.state.deliveryCharges} onChange={this.EditDeliveryChargesHandler} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <i className="fa fa-lock" aria-hidden="true"></i></span>
                                                    <input type="text" value={this.state.status} onChange={this.EditStatusHandler} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <i className="fa fa-lock" aria-hidden="true"></i></span>
                                                    <input type="text" className="form-control" value={this.state.additionalComments} onChange={this.EditAdditionalCommentsHandler}/>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        {/*Cancel Button*/}
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                            <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-success" onClick={this.updateDelivery}>
                                            <i className="fas fa-pen"></i>&nbsp;
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeliveryDashboardComponent;