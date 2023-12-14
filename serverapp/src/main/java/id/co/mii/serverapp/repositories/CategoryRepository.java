package id.co.mii.serverapp.repositories;

import id.co.mii.serverapp.models.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
  // query search category name
  @Query("SELECT c FROM Category c WHERE c.name LIKE %?1%")
  public List<Category> searchCategoryByName(String name);

  // find by name
  public Optional<Category> findByName(String name);
}
