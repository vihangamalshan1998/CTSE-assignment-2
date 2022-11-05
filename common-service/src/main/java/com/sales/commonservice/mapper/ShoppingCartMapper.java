package com.sales.commonservice.mapper;

import com.sales.commonservice.model.ShoppingCart;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ShoppingCartMapper implements RowMapper<ShoppingCart> {
    @Override
    public ShoppingCart mapRow(ResultSet rs, int rowNum) throws SQLException {

        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setOrderId(rs.getInt("orderId"));
        shoppingCart.setItems(rs.getString("items"));
        shoppingCart.setUserId(rs.getInt("userId"));
        shoppingCart.setTotalAmount(rs.getDouble("totalAmount"));
        shoppingCart.setPickUpLocation(rs.getString("pickUpLocation"));
        shoppingCart.setDestination(rs.getString("Destination"));
        return  shoppingCart;
    }
}
