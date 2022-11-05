package com.Item.service;

import com.Item.model.Item;
import com.Item.repository.ItemRepositoryImpl;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {

    private ItemRepositoryImpl itemRepository;

    public ItemServiceImpl(ItemRepositoryImpl itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public boolean createNewItem(Item item) {
        Number x = itemRepository.createItem(item);
        if (Integer.parseInt(String.valueOf(x)) > 0) {
            return true;
        }
        return false;
    }

    @Override
    public List<Item> getItems() {
        return itemRepository.getItems();
    }

    @Override
    public boolean updateItem(int id, Item item) {
        return itemRepository.updateItemDetails(id, item);
    }

    @Override
    public boolean deleteItemDetails(int id) {
        return itemRepository.deleteItemById(id);
    }
    @Override
    public List<Item> getOneItem(int id) {
        return itemRepository.getItemById(id);
    }
}
