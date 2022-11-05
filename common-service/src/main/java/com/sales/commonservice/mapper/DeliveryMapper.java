package com.sales.commonservice.mapper;

import com.sales.commonservice.model.Delivery;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DeliveryMapper implements RowMapper<Delivery> {

    @Override
    public Delivery mapRow(ResultSet rs, int rowNum) throws SQLException {
        Delivery delivery = new Delivery();
        delivery.setDeliveryId(rs.getInt("deliveryId"));
        delivery.setOrderId(rs.getInt("orderId"));
        delivery.setDeliveryCharges(rs.getDouble("deliveryCharges"));
        delivery.setStatus(rs.getString("status"));
        delivery.setAdditionalComments(rs.getString("additionalComments"));
        return delivery;
    }
}
