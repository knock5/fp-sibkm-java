package id.co.mii.clientapp.controllers.rest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.mii.clientapp.models.Status;
import id.co.mii.clientapp.services.StatusService;
import lombok.AllArgsConstructor;


@RestController
@AllArgsConstructor
@RequestMapping("/api/status")
public class RestStatusController {

    private StatusService statusService;

@GetMapping
  public List<Status> getAll() {
    return statusService.getAll();
  }

  @GetMapping("/{id}")
  public Status getById(@PathVariable("id") Integer id) {
    return statusService.getById(id);
  }

  @PostMapping
  public Status create(@RequestBody Status status) {
    return statusService.create(status);
  }

  @PutMapping("/update/{id}")
  public Status update(
    @PathVariable("id") Integer id,
    @RequestBody Status status
  ) {
    return statusService.update(id, status);
  }

  @DeleteMapping("/{id}")
  public Status delete(@PathVariable("id") Integer id) {
    return statusService.delete(id);
  }
}
