package id.co.mii.serverapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import id.co.mii.serverapp.models.Category;  

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    
    public Optional<Category> findByName(String name);
}
