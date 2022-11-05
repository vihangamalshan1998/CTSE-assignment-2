package com.Item.repository;

import com.Item.mapper.ItemMapper;
import com.Item.model.Item;
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
public class ItemRepositoryImpl implements ItemRepository {
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public JdbcTemplate jdbcTemplate;

    public ItemRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate, JdbcTemplate jdbcTemplate){
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Number createItem(Item item) {
        StringBuilder query = new StringBuilder("INSERT INTO item(id,item_name,description,qty,amount,user_id) VALUES(?,?,?,?,?,?)");
        GeneratedKeyHolder key = new GeneratedKeyHolder();
        try {
            jdbcTemplate.update(con -> {
                final PreparedStatement ps = con.prepareStatement(query.toString(), Statement.RETURN_GENERATED_KEYS);
                ps.setInt(1, item.getId());
                ps.setString(2, item.getItem_name());
                ps.setString(3, item.getDescription());
                ps.setInt(4, item.getQty());
                ps.setDouble(5, item.getAmount());
                ps.setInt(6, item.getUser_id());
                return ps;
            }, key);
        } catch (Exception ex) {
            throw new RuntimeException("Error getting Save item Details ".concat(ex.getMessage()));
        }
        return 1;
    }

    @Override
    public List<Item> getItems() {
        String query = "SELECT * FROM item";
        MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        try {
            return namedParameterJdbcTemplate.query(query, parameterSource, new ItemMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    @Override
    public boolean updateItemDetails(int id, Item item) {
//        id,item_name,description,qty,amount,user_id
        try {
            String updateQuery = "UPDATE item" +
                    " SET id = "+item.getId()+", item_name ='"+item.getItem_name()+"', description ='"+item.getDescription()+"'" +
                    ",qty = "+item.getQty()+", amount ='"+item.getAmount()+"', user_id ='"+item.getUser_id()+"'" +
                    " WHERE id = "+id+"";
            jdbcTemplate.update(updateQuery);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error getting update item fulfillment status"+item);
        }
    }

    @Override
    public boolean deleteItemById(int id) {
        try {
            String deleteQuery = "DELETE FROM item " +
                    "WHERE id = ?";
            int i = jdbcTemplate.update(deleteQuery,id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error getting delete order fulfillment status" + id);
        }
    }

    public List<Item> getItemById(int id) {
        String query = "SELECT * FROM item WHERE id = "+id+"";
        MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        try {
            return namedParameterJdbcTemplate.query(query, parameterSource, new ItemMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }
}
