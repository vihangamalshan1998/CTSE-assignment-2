package com.Item.mapper;

import com.Item.model.Item;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemMapper implements RowMapper<Item> {
    @Override
    public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
        Item item = new Item();
        item.setId(rs.getInt("id"));
        item.setItem_name(rs.getString("item_name"));
        item.setDescription(rs.getString("description"));
        item.setQty(rs.getInt("qty"));
        item.setAmount(rs.getDouble("amount"));
        item.setUser_id(rs.getInt("user_id"));
        return item;
    }
}
