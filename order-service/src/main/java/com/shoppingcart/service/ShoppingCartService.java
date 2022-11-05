package com.shoppingcart.service;


import com.shoppingcart.model.ShoppingCart;

import java.util.List;

public interface ShoppingCartService {
    boolean createNewOrder(ShoppingCart shoppingCart);

    List<ShoppingCart> getOrders();

    boolean deleteOrderDetails(int orderId);

    boolean updateOder(int orderId, ShoppingCart shoppingCart);

}
