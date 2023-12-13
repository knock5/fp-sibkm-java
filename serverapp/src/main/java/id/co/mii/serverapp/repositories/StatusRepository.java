package id.co.mii.serverapp.repositories;

import id.co.mii.serverapp.models.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends JpaRepository<Status, Integer> {
  Status findByName(String name);
}
