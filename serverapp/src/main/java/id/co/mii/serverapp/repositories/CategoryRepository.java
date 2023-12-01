package id.co.mii.serverapp.repositories;

import id.co.mii.serverapp.models.Category;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
  public Optional<Category> findByName(String name);
}
