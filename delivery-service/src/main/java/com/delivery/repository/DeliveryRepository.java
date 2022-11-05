package com.delivery.repository;

import com.sales.commonservice.model.Delivery;

import java.util.List;

public interface DeliveryRepository {
    Number createDelivery(Delivery delivery);
    List<Delivery> getDeliveries();
    boolean updateDelivery(int deliveryId, Delivery delivery);
    boolean deleteDelivery(int deliveryId);
    List<Delivery> getDeliveryById(int deliveryId);
}
