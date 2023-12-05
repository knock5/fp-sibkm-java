package id.co.mii.serverapp.services;

import id.co.mii.serverapp.models.Category;
import id.co.mii.serverapp.repositories.CategoryRepository;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@AllArgsConstructor
public class CategoryService {

  private CategoryRepository categoryRepository;

  public List<Category> getAll() {
    return categoryRepository.findAll();
  }

  public Category getById(Integer id) {
    return categoryRepository
      .findById(id)
      .orElseThrow(() ->
        new ResponseStatusException(
          HttpStatus.NOT_FOUND,
          "Category not found!!"
        )
      );
  }

  public Category create(Category category) {
    if (categoryRepository.findByName(category.getName()).isPresent()) {
      throw new ResponseStatusException(
        HttpStatus.CONFLICT,
        "Name is already exists!!"
      );
    }

    return categoryRepository.save(category);
  }

  public Category update(Integer id, Category category) {
    getById(id);
    category.setId(id);
    return categoryRepository.save(category);
  }

  public Category delete(Integer id) {
    Category category = getById(id);
    categoryRepository.delete(category);
    return category;
  }
}
