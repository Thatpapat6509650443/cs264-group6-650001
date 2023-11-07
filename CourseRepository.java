package th.ac.tu.cs.assignment.repository;

import org.springframework.stereotype.Repository;
import th.ac.tu.cs.assignment.model.CourseRequest;

import java.util.List;

@Repository
public interface CourseRepository{
    List<CourseRequest> save(CourseRequest courseRequest);
}
