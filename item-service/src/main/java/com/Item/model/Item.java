package com.Item.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class Item {
    private int id;
    private String item_name;
    private String  description;
    private int qty;
    private Double amount;
    private int user_id;
}
