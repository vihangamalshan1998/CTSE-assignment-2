package com.shoppingcart.repository;


import com.shoppingcart.model.ShoppingCart;
import com.shoppingcart.mapper.ShoppingCartMapper;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ShoppingCartRepositoryImpl implements ShoppingCartRepository {

    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public JdbcTemplate jdbcTemplate;

    public ShoppingCartRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate, JdbcTemplate jdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public Number createOrder(ShoppingCart shoppingCart) {
        StringBuilder query = new StringBuilder("INSERT INTO shoppingcart(items,userId,totalAmount,pickUpLocation,destination) VALUES(?,?,?,?,?)");
        GeneratedKeyHolder key = new GeneratedKeyHolder();
        try {
            jdbcTemplate.update(con -> {
                final PreparedStatement ps = con.prepareStatement(query.toString(), Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, shoppingCart.getItems());
                ps.setInt(2, shoppingCart.getUserId());
                ps.setDouble(3, shoppingCart.getTotalAmount());
                ps.setString(4, shoppingCart.getPickUpLocation());
                ps.setString(5, shoppingCart.getDestination());
                return ps;
            }, key);
        } catch (Exception ex) {
            throw new RuntimeException("Error getting Save Order Details ".concat(ex.getMessage()));
        }
        return key.getKey();
    }

    @Override
    public List<ShoppingCart> getOrders() {
        String query = "SELECT * FROM shoppingcart";

        MapSqlParameterSource parameterSource = new MapSqlParameterSource();

        try {
            return namedParameterJdbcTemplate.query(query, parameterSource, new ShoppingCartMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    @Override
    public boolean updateOrderDetails(int orderId, ShoppingCart shoppingCart) {
        try {
            //orderId,items,userId,totalAmount,pickUpLocation,destination
            String updateQuery = "UPDATE shoppingcart " +
                    " SET items = '" + shoppingCart.getItems()+"', totalAmount ="+shoppingCart.getTotalAmount()+
                    " ,pickUpLocation = '"+shoppingCart.getPickUpLocation() +"',destination = '"+shoppingCart.getDestination() + "'"+
                    " WHERE orderId = "+orderId+";";
            jdbcTemplate.update(updateQuery);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error getting update order fulfillment status");
        }
    }

    @Override
    public boolean deleteOrderById(int orderId) {
        try {
            String updateQuery = "DELETE FROM shoppingcart " +
                    "WHERE orderId = ?";
            int i = jdbcTemplate.update(updateQuery,orderId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error getting delete order fulfillment status" + orderId);
        }
    }
}
