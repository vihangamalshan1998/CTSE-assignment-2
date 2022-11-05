package com.delivery.service;

import com.sales.commonservice.model.Delivery;

import java.util.List;

public interface DeliveryService {
    boolean createDelivery(Delivery delivery);
    List<Delivery> getDeliveries();
    boolean updateDelivery(int deliveryId,Delivery delivery);
    boolean deleteDeliveryDetailsById(int deliveryId);
    List<Delivery> getDeliveryById(int deliveryId);

}
