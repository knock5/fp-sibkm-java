package id.co.mii.serverapp.repositories;

import id.co.mii.serverapp.models.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository
  extends JpaRepository<Complaint, Integer> {}
