package id.co.mii.serverapp.controllers;

import id.co.mii.serverapp.models.Category;
import id.co.mii.serverapp.services.CategoryService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/category")
@PreAuthorize("hasAnyRole('ADMIN', 'OFFICER', 'USER')")
public class CategoryController {

  private CategoryService categoryService;

  @GetMapping
  public List<Category> getAll() {
    return categoryService.getAll();
  }

  @GetMapping("/{id}")
  public Category getById(@PathVariable Integer id) {
    return categoryService.getById(id);
  }

  @PreAuthorize("hasAnyAuthority('ROLE_SUPER_ADMIN', 'ROLE_EDITOR_OFFICER')")
  @PostMapping
  public Category create(@RequestBody Category category) {
    return categoryService.create(category);
  }

  @PreAuthorize("hasAnyAuthority('ROLE_SUPER_ADMIN', 'ROLE_EDITOR_OFFICER')")
  @PutMapping("/{id}")
  public Category update(
    @PathVariable Integer id,
    @RequestBody Category category
  ) {
    return categoryService.update(id, category);
  }

  @PreAuthorize("hasAnyAuthority('ROLE_SUPER_ADMIN', 'ROLE_EDITOR_OFFICER')")
  @DeleteMapping("/{id}")
  public Category delete(@PathVariable Integer id) {
    return categoryService.delete(id);
  }

  // search category name
  @GetMapping("/search")
  public List<Category> search(@RequestParam(name = "name") String name) {
    return categoryService.search(name);
  }
}
