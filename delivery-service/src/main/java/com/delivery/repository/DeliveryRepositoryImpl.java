package com.delivery.repository;

import com.sales.commonservice.mapper.DeliveryMapper;
import com.sales.commonservice.model.Delivery;
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
public class DeliveryRepositoryImpl implements DeliveryRepository{
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public JdbcTemplate jdbcTemplate;

    public DeliveryRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate, JdbcTemplate jdbcTemplate){
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Number createDelivery(Delivery delivery) {
        StringBuilder query = new StringBuilder("INSERT INTO delivery(orderId,deliveryCharges,status,additionalComments) VALUES(?,?,?,?)");
        GeneratedKeyHolder key = new GeneratedKeyHolder();
        try {
            jdbcTemplate.update(con -> {
                final PreparedStatement ps = con.prepareStatement(query.toString(), Statement.RETURN_GENERATED_KEYS);
                ps.setInt(1, delivery.getOrderId());
                ps.setDouble(2, delivery.getDeliveryCharges());
                ps.setString(3, delivery.getStatus());
                ps.setString(4, delivery.getAdditionalComments());
                return ps;
            }, key);
        } catch (Exception ex) {
            throw new RuntimeException("Error getting Save Delivery Details ".concat(ex.getMessage()));
        }
        return key.getKey();
    }

    @Override
    public List<Delivery> getDeliveries() {
        String query = "SELECT * FROM delivery";
        MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        try {
            return namedParameterJdbcTemplate.query(query, parameterSource, new DeliveryMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    @Override
    public boolean updateDelivery(int deliveryId, Delivery delivery) {
        try {
            String updateQuery = "UPDATE delivery" +
                    " SET deliveryCharges = "+delivery.getDeliveryCharges()+", status ='"+delivery.getStatus()+"', additionalComments ='"+delivery.getAdditionalComments()+"'" +
                    " WHERE deliveryId = "+deliveryId+"";
            jdbcTemplate.update(updateQuery);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error getting update delivery fulfillment status" + delivery.getStatus());
        }
    }
    @Override
    public boolean deleteDelivery(int deliveryId) {
        try {
            String updateQuery = "DELETE FROM delivery\n" +
                    "WHERE deliveryId = ?";
            int i = jdbcTemplate.update(updateQuery,deliveryId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error deleting delivery details" + deliveryId);
        }
    }

    @Override
    public List<Delivery> getDeliveryById(int deliveryId) {
        String query = "SELECT * FROM delivery WHERE deliveryId = "+deliveryId+"";
        MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        try {
            return namedParameterJdbcTemplate.query(query, parameterSource, new DeliveryMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }
}
