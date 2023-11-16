package th.ac.tu.cs.services.model;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class modelRequest {
    private long id;
    private Date date;
    private String topic;
    private String prefix;
    private String studentFirstName;
    private String studentLastName;
    private String studentId;
    private String username;


    public modelRequest(long id, Date date, String topic, String prefix, String studentFirstName, String studentLastName, String studentId, String username) {
        this.id = id;
        this.date = date;
        this.topic = topic;
        this.prefix = prefix;
        this.studentFirstName = studentFirstName;
        this.studentLastName = studentLastName;
        this.studentId = studentId;
        this.username = username;
    }

    public modelRequest() {

    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getStudentFirstName() {
        return studentFirstName;
    }

    public void setStudentFirstName(String studentFirstName) {
        this.studentFirstName = studentFirstName;
    }

    public String getStudentLastName() {
        return studentLastName;
    }

    public void setStudentLastName(String studentLastName) {
        this.studentLastName = studentLastName;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    }

