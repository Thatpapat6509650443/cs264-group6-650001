package th.ac.tu.cs.assignment.model;
public class CourseRequest {

    private Long id;
    private String date;
    private String prefix;
    private String name;
    private String lastname;
    private int studentId;
    private int year;
    private String major;
    private String address;
    private String subdistrict;
    private String district;
    private String province;
    private int postcode;
    private String mobile;
    private String homePhone;
    private String advisor;
    private String reason;
    public int getPostcode() {
        return postcode;
    }

    public int getStudentId() {
        return studentId;
    }

    public int getYear() {
        return year;
    }

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public String getAdvisor() {
        return advisor;
    }

    public String getDate() {
        return date;
    }

    public String getDistrict() {
        return district;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public String getLastname() {
        return lastname;
    }

    public String getMajor() {
        return major;
    }

    public String getMobile() {
        return mobile;
    }

    public String getName() {
        return name;
    }

    public String getProvince() {
        return province;
    }

    public String getReason() {
        return reason;
    }

    public String getSubdistrict() {
        return subdistrict;
    }

    public String getPrefix() {
        return prefix;
    }

    @Override
    public String toString() {
        return "CourseRequest{" +
                "id=" + id +
                ", firstName='" + name + '\'' +
                ", lastName='" + lastname + '\'' +
                ", studentID='" + id + '\'' +
                ", reason='" + reason + '\'' +
                '}';
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setAdvisor(String advisor) {
        this.advisor = advisor;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public void setSubdistrict(String subdistrict) {
        this.subdistrict = subdistrict;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public CourseRequest(String prefix, String firstName, String lastName, Long studentID){
        this.prefix = prefix;
        this.name = firstName;
        this.lastname = lastName;
        this.id = studentID;
    }
}
