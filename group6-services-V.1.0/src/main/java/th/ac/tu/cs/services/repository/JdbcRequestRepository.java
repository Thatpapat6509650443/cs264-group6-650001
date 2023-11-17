package th.ac.tu.cs.services.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import th.ac.tu.cs.services.model.modelRequest;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class JdbcRequestRepository implements RequestRepository {
    private final ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int save(modelRequest request) {
        String sql = "INSERT INTO request (date, topic, prefix, studentFirstName, studentLastName, studentId, username) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                request.getDate(),
                request.getTopic(),
                request.getPrefix(),
                request.getStudentFirstName(),
                request.getStudentLastName(),
                request.getStudentId(),
                (request.getUsername() != null) ? request.getUsername() : "defaultUsername"
        );
    }

    @Override
    public int update(modelRequest request) {
        String sql = "UPDATE request " +
                "SET  date =?, topic = ?, prefix=?, studentFirstName=?, studentLastName=?, studentId=? ,username=?";

        return jdbcTemplate.update(sql,
                request.getDate(),
                request.getTopic(),
                request.getPrefix(),
                request.getStudentFirstName(),
                request.getStudentLastName(),
                request.getStudentId(),
                request.getUsername(),
                request.getId()
        );

    }

    @Override
    public modelRequest findById(Long id) {
        try{
            String sql = "SELECT date, topic, prefix, studentFirstName, studentLastName, studentId, studentYear, studyField, advisor, addressNumber, moo, tumbol, amphur, province, postalCode, mobilePhone, phone, cause from request WHERE id=?";
            modelRequest req = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(modelRequest.class),id);
            return req;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public int deleteById(Long id) {
        return jdbcTemplate.update("DELETE FROM request WHERE id=?", id);
    }

    @Override
    public List<modelRequest> findAll() {
        return jdbcTemplate.query("SELECT * from request", new RequestMapper());
    }


}

class RequestMapper implements RowMapper<modelRequest> {
    private final ObjectMapper objectMapper = new ObjectMapper();
    @Override
    public modelRequest mapRow(ResultSet rs, int rowNum) throws SQLException {
        modelRequest request = new modelRequest();
        try {
            request.setId(rs.getInt("id"));
            request.setDate(rs.getDate("date"));
            request.setTopic(rs.getString("topic"));
            request.setPrefix(rs.getString("prefix"));
            request.setStudentFirstName(rs.getString("studentFirstName"));
            request.setStudentLastName(rs.getString("studentLastName"));
            request.setStudentId(rs.getString("studentId"));
            request.setUsername(rs.getString("username"));
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return request;
    }
}