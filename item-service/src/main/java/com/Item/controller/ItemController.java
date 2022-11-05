package com.Item.controller;

import com.Item.model.Item;
import com.Item.service.ItemServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@Slf4j
@CrossOrigin
public class ItemController {

    private final ItemServiceImpl itemService;

    public ItemController(ItemServiceImpl itemService) {
        this.itemService = itemService;
    }

    @PostMapping("/")
    public boolean createOrder(@RequestBody Item item) {
        log.info("request data from client {} ", item);
        return itemService.createNewItem(item);
    }
    @GetMapping("/")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @GetMapping("/{id}")
    public List<Item> getItemDetails(@PathVariable int id){
        return itemService.getOneItem(id);

    }

    @PutMapping("/{id}")
    public boolean updateItemDetails(@PathVariable int id,@RequestBody Item item){
        return itemService.updateItem(id,item);

    }

    @DeleteMapping("/{id}")
    public boolean deleteItem(@PathVariable int id){
        return itemService.deleteItemDetails(id);

    }
}
