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
        private int studentYear;
        private String studentField;
        private String addressNumber;
        private String moo;
        private String tumbol;
        private String amphur;
        private String province;
        private long postalCode;
        private long mobilePhone;
        private long phone;
        private String advisor;
        private String radio;
        private int term;
        private int termYear;
        private String reason;
        private String faculty;
        private String facultyof;
        private String RUcourseLcourse;
        private String picture;

        public ModelRequest(long id, Date date, String topic, String prefix, String studentFirstName, String studentLastName, String studentId, String username, int studentYear, String studentField, String addressNumber, String moo, String tumbol, String amphur, String province, long postalCode, long mobilePhone, long phone, String advisor, String radio, int term, int termYear, String reason, String faculty, String facultyof, String RUcourseLcourse, String picture) {
            this.id = id;
            this.date = date;
            this.topic = topic;
            this.prefix = prefix;
            this.studentFirstName = studentFirstName;
            this.studentLastName = studentLastName;
            this.studentId = studentId;
            this.username = username;
            this.studentYear = studentYear;
            this.studentField = studentField;
            this.addressNumber = addressNumber;
            this.moo = moo;
            this.tumbol = tumbol;
            this.amphur = amphur;
            this.province = province;
            this.postalCode = postalCode;
            this.mobilePhone = mobilePhone;
            this.phone = phone;
            this.advisor = advisor;
            this.radio = radio;
            this.term = term;
            this.termYear = termYear;
            this.reason = reason;
            this.faculty = faculty;
            this.facultyof = facultyof;
            this.RUcourseLcourse = RUcourseLcourse;
            this.picture = picture;
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
    public int getStudentYear() {
        return studentYear;
    }

    public void setStudentYear(int studentYear) {
        this.studentYear = studentYear;
    }

    public String getStudentField() {
        return studentField;
    }

    public void setStudentField(String studentField) {
        this.studentField = studentField;
    }

    public String getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(String addressNumber) {
        this.addressNumber = addressNumber;
    }

    public String getMoo() {
        return moo;
    }

    public void setMoo(String moo) {
        this.moo = moo;
    }

    public String getTumbol() {
        return tumbol;
    }

    public void setTumbol(String tumbol) {
        this.tumbol = tumbol;
    }

    public String getAmphur() {
        return amphur;
    }

    public void setAmphur(String amphur) {
        this.amphur = amphur;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public long getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(long postalCode) {
        this.postalCode = postalCode;
    }

    public long getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(long mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getAdvisor() {
        return advisor;
    }

    public void setAdvisor(String advisor) {
        this.advisor = advisor;
    }

    public String getRadio() {
        return radio;
    }

    public void setRadio(String radio) {
        this.radio = radio;
    }

    public int getTerm() {
        return term;
    }

    public void setTerm(int term) {
        this.term = term;
    }

    public int getTermYear() {
        return termYear;
    }

    public void setTermYear(int termYear) {
        this.termYear = termYear;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getFacultyof() {
        return facultyof;
    }

    public void setFacultyof(String facultyof) {
        this.facultyof = facultyof;
    }

    public String getRUcourseLcourse() {
        return RUcourseLcourse;
    }

    public void setRUcourseLcourse(String RUcourseLcourse) {
        this.RUcourseLcourse = RUcourseLcourse;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
    }

