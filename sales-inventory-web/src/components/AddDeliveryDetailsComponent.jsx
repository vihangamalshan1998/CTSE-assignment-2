import React, {Component} from 'react';
import SalesInventoryServices from "../services/SalesInventoryServices";
import Header from "./header";
import delivery from "../images/delivery.svg"
import axios from "axios";

class AddDeliveryDetailsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderId: '',
            deliveryCharges: '',
            status: '',
            additionalComments: ''
        }
        this.changeOrderId = this.changeOrderId.bind(this);
        this.changeDeliveryCharges = this.changeDeliveryCharges.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeAdditionalComments = this.changeAdditionalComments.bind(this);

    }
    saveDeliveryDetails = (e) => {
        e.preventDefault();
        let delivery = {
            orderId: this.state.orderId,
            deliveryCharges: this.state.deliveryCharges,
            status: this.state.status,
            additionalComments: this.state.additionalComments
        };
        console.log('delivery => ' + JSON.stringify(delivery));

        if(this.state.orderId !==''&& this.state.deliveryCharges!=='' && this.state.status!== '' && this.state.additionalComments!==''){
            SalesInventoryServices.addDelivery(delivery).then(res =>{
                alert("Delivery Added Successfully");
                this.props.history.push('/delivery');
                console.log("XXX"+this.state.orderId);
            });
        }else{
            alert("Please fill each required field");
        }
    }
    //add student
    addDelivery = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('orderId', this.state.orderId);
        formData.append('deliveryCharges', this.state.deliveryCharges);
        formData.append('status', this.state.status);
        formData.append('additionalComments', this.state.additionalComments);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        if(this.state.orderId !=='' && this.state.deliveryCharges !=='' && this.state.status !==''
            && this.state.additionalComments) {
            axios.post("http://localhost:6091/delivery/addDelivery", formData, config).then(res => {
                this.props.history.push('/delivery');
                window.location.reload();
            })
        }else{
            alert("Cannot leave empty field");
        }
    }
    changeOrderId = (delivery)=> {
        this.setState({orderId: delivery.target.value});
    }
    changeDeliveryCharges = (delivery)=> {
        this.setState({deliveryCharges: delivery.target.value});
    }
    changeStatus = (delivery)=> {
        this.setState({status: delivery.target.value});
    }
    changeAdditionalComments = (delivery)=> {
        this.setState({additionalComments: delivery.target.value});
    }
    render() {
        return (
            <div className="container-fluid">
                <Header></Header>
                <br/><br/><br/><br/>
                <div className="container">
                    <div className="row">
                        <h3>Add Delivery Details</h3>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src={delivery} />
                        </div>
                        <div className="col-6">
                            <form className="form-container">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title" className="form-label">Order ID</label>
                                        <input type="Number" className="form-control" name="orderId" id="orderId" placeholder="Order ID"
                                               value={this.state.orderId} onChange={this.changeOrderId}/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="title" className="form-label">Delivery Charges</label>
                                        <input type="Number" className="form-control" name="deliveryCharges" id="deliveryCharges" placeholder="Delivery Charges"
                                               value={this.state.deliveryCharges} onChange={this.changeDeliveryCharges}/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="Delivery Status" className="form-label">Delivery Status</label>
                                        <input type="text" className="form-control" name="status" id="status" placeholder="Delivery Status"
                                               value={this.state.status} onChange={this.changeStatus}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Delivery Status" className="form-label">Additional Comments</label>
                                        <input type="text" className="form-control" name="additionalComments" id="additionalComments" placeholder="Additional Comments"
                                               value={this.state.additionalComments} onChange={this.changeAdditionalComments}/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" onClick={this.saveDeliveryDetails}>Submit</button>
                                    </div>
                                    <br/>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default AddDeliveryDetailsComponent;
