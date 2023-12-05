package id.co.mii.serverapp.controllers;

import id.co.mii.serverapp.models.User;
import id.co.mii.serverapp.services.UserService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {

  private UserService userService;

  @GetMapping
  public List<User> getAll() {
    return userService.getAll();
  }

  @GetMapping("/{id}")
  public User getById(@PathVariable Integer id) {
    return userService.getById(id);
  }

  @PostMapping
  public User create(@RequestBody User user) {
    return userService.create(user);
  }

  @PutMapping("/{id}")
  public User update(@PathVariable Integer id, @RequestBody User user) {
    return userService.update(id, user);
  }

  @DeleteMapping("/{id}")
  public User delete(@PathVariable Integer id) {
    return userService.delete(id);
  }
}
