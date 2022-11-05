package com.shoppingcart.repository;


import com.shoppingcart.model.ShoppingCart;

import java.util.List;

public interface ShoppingCartRepository {

    Number createOrder(ShoppingCart shoppingCart);

    List<ShoppingCart> getOrders();

    boolean updateOrderDetails(int orderId,ShoppingCart shoppingCart);

    boolean deleteOrderById(int orderId);
}
