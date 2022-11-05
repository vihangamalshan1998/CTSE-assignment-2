package com.Item.service;


import com.Item.model.Item;

import java.util.List;

public interface ItemService {
    boolean createNewItem(Item item);
    List<Item> getItems();
    boolean updateItem(int id, Item item);
    boolean deleteItemDetails(int id);
    List<Item> getOneItem(int id);
}
