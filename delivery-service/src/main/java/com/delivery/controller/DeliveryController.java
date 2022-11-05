package com.delivery.controller;

import com.delivery.service.DeliveryServiceImpl;
import com.sales.commonservice.model.Delivery;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/delivery")
@Slf4j
public class DeliveryController {

    private DeliveryServiceImpl deliveryService;

    public DeliveryController(DeliveryServiceImpl deliveryService) {
        this.deliveryService = deliveryService;
    }

    @PostMapping("/addDelivery")
    public boolean addDelivery(@RequestBody Delivery delivery){
        log.info("request data from delivery {}", delivery);
        return deliveryService.createDelivery(delivery);
    }

    @GetMapping("/")
    public List<Delivery> getDeliveries() {
        return deliveryService.getDeliveries();
    }

    @PutMapping("/{deliveryId}")
    public boolean updateDelivery(@PathVariable int deliveryId,@RequestBody Delivery delivery){
        return deliveryService.updateDelivery(deliveryId,delivery);
    }

    @DeleteMapping("/{deliveryId}")
    public boolean deleteCustomerById(@PathVariable int deliveryId){
        return deliveryService.deleteDeliveryDetailsById(deliveryId);
    }

    @GetMapping("/{deliveryId}")
    public List<Delivery> getDeliveries(@PathVariable int deliveryId) {
        return deliveryService.getDeliveryById(deliveryId);
    }

}
