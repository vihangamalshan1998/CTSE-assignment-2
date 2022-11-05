package com.Item.repository;


import com.Item.model.Item;

import java.util.List;

public interface ItemRepository {
    Number createItem(Item item);
    List<Item> getItems();
    boolean updateItemDetails(int id, Item item);
    boolean deleteItemById(int id);
    List<Item> getItemById(int id);
}
