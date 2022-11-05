import axios from 'axios';

//Get All Deliveries
const Delivery_API_GET_All = "http://35.226.121.252:6091/delivery/";
//Delete Delivery
const Delivery_API_DELETE = "http://localhost:6091/delivery";
//Get Delivery By ID
const Delivery_API_GET_BY_ID = "http://35.226.121.252:6091/delivery";
//Add Delivery Details
const Delivery_API_ADD = "http://localhost:6091/delivery/addDelivery";
//Update delivery details
const Delivery_API_UPDATE = "http://localhost:6091/delivery";

class SalesInventoryServices{
    //get all delivery details
    getAllDeliveryDetails(){
        return axios.get(Delivery_API_GET_All);
    }
    //delete a delivery
    deleteDeliveryDetails(deliveryId){
        return axios.delete(Delivery_API_DELETE + '/' + deliveryId);
    }
    //get delivery by ID
    getDeliveryById(deliveryId){
        return axios.get(Delivery_API_GET_BY_ID + '/' + deliveryId);
    }
    //add delivery details
    addDelivery(delivery){
        return axios.post(Delivery_API_ADD, delivery);
    }
    //update delivery details
    updateDelivery(delivery,deliveryId){
        return axios.put(Delivery_API_UPDATE + '/' + deliveryId, delivery);
    }
}


export default new SalesInventoryServices();