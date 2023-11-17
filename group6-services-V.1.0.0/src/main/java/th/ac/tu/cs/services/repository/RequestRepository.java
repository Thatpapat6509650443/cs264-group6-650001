package th.ac.tu.cs.services.repository;

import th.ac.tu.cs.services.model.modelRequest;
import java.util.List;
public interface RequestRepository {
    public int save(modelRequest request) ;

    public int update(modelRequest request) ;

    public modelRequest findById(Long id) ;

    public int deleteById(Long id);

    public List<modelRequest> findAll();
}
