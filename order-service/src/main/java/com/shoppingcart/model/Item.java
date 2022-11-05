package com.shoppingcart.model;

import lombok.Data;

@Data
public class Item {
    private int itemId;
    private String itemName;
    private double amount;

}
