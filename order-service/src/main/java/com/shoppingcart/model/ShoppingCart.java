package com.shoppingcart.model;

import lombok.Data;

@Data
public class ShoppingCart {
    private int orderId;
    private String items;
    private int userId;
    private double totalAmount;
    private String pickUpLocation;
    private String Destination;
}
