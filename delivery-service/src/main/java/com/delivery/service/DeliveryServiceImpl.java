package com.delivery.service;

import com.delivery.repository.DeliveryRepositoryImpl;
import com.sales.commonservice.model.Delivery;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryServiceImpl implements DeliveryService{

    private DeliveryRepositoryImpl deliveryRepository;

    public DeliveryServiceImpl(DeliveryRepositoryImpl deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public boolean createDelivery(Delivery delivery) {
        Number x =  deliveryRepository.createDelivery(delivery);
        if (Integer.parseInt(String.valueOf(x)) > 0) {
            return true;
        }
        return false;
    }

    @Override
    public List<Delivery> getDeliveries() {
        return deliveryRepository.getDeliveries();
    }

    @Override
    public boolean updateDelivery(int deliveryId,Delivery delivery) {
        return deliveryRepository.updateDelivery(deliveryId,delivery);
    }

    @Override
    public boolean deleteDeliveryDetailsById(int deliveryId) {
        return deliveryRepository.deleteDelivery(deliveryId);
    }

    @Override
    public List<Delivery> getDeliveryById(int deliveryId) {
        return deliveryRepository.getDeliveryById(deliveryId);
    }
}








