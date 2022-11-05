package com.shoppingcart.controller;

import com.shoppingcart.model.ShoppingCart;
import com.shoppingcart.service.ShoppingCartServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin()
@RestController
@RequestMapping("/shopping-cart")
@Slf4j
public class ShoppingCartController {

    private ShoppingCartServiceImpl shoppingCartService;

    public ShoppingCartController (ShoppingCartServiceImpl shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @PostMapping("/")
    public boolean createOrder(@RequestBody ShoppingCart shoppingCart) {
        log.info("request data from client {} ", shoppingCart);
        return shoppingCartService.createNewOrder(shoppingCart);
    }

    @GetMapping("/")
    public List<ShoppingCart> getOrders() {
        return shoppingCartService.getOrders();
    }


    @PutMapping("/{id}")
    public boolean updateOderDetails(@PathVariable int id,@RequestBody ShoppingCart shoppingCart){
        return shoppingCartService.updateOder(id,shoppingCart);

    }


    @DeleteMapping("/{id}")
    public boolean deleteOrder(@PathVariable int id){
        return shoppingCartService.deleteOrderDetails(id);

    }

}
