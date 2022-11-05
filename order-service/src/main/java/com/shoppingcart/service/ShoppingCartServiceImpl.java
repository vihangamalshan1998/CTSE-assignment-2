package com.shoppingcart.service;


import com.shoppingcart.model.ShoppingCart;
import com.shoppingcart.repository.ShoppingCartRepositoryImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private ShoppingCartRepositoryImpl shoppingCartRepository;

    public ShoppingCartServiceImpl(ShoppingCartRepositoryImpl shoppingCartRepository){
        this.shoppingCartRepository = shoppingCartRepository;
    }
    @Override
    public boolean createNewOrder(ShoppingCart shoppingCart) {
        Number x =  shoppingCartRepository.createOrder(shoppingCart);

        if (Integer.parseInt(String.valueOf(x)) > 0) {
            return true;
        }
        return false;
    }

    @Override
    public List<ShoppingCart> getOrders() {
        return shoppingCartRepository.getOrders();
    }

    @Override
    public boolean updateOder(int orderId, ShoppingCart shoppingCart) {
        return shoppingCartRepository.updateOrderDetails(orderId,shoppingCart);
    }

    @Override
    public boolean deleteOrderDetails(int orderId) {
        return shoppingCartRepository.deleteOrderById(orderId);
    }
}
