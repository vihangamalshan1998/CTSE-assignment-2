package com.sales.commonservice.model;

import lombok.*;

@Data
public class Delivery {

    private int deliveryId;
    private int orderId;
    private double deliveryCharges;
    private String status;
    private String additionalComments;
}
