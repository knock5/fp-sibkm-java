package id.co.mii.serverapp.repositories;

import id.co.mii.serverapp.models.People;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PeopleRepository extends JpaRepository<People, Integer> {
  boolean existsByEmail(String email);
  boolean existsByPhone(String phone);

  @Query(
    "SELECT p FROM People p JOIN p.user u JOIN u.roles r WHERE r.name = :roleName"
  )
  List<People> findByRoleName(@Param("roleName") String roleName);
}
