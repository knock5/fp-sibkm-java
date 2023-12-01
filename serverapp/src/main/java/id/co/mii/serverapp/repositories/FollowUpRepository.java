package id.co.mii.serverapp.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import id.co.mii.serverapp.models.FollowUp;

@Repository
public interface FollowUpRepository extends JpaRepository <FollowUp, Integer> {
    
}
