package id.co.mii.clientapp.controllers.rest;

<<<<<<< HEAD
import java.util.List;

=======
import id.co.mii.clientapp.models.Status;
import id.co.mii.clientapp.services.StatusService;
import java.util.List;
import lombok.AllArgsConstructor;
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
import id.co.mii.clientapp.models.Status;
import id.co.mii.clientapp.services.StatusService;
import lombok.AllArgsConstructor;


=======
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
@RestController
@AllArgsConstructor
@RequestMapping("/api/status")
public class RestStatusController {

<<<<<<< HEAD
    private StatusService statusService;

@GetMapping
=======
  private StatusService statusService;

  @GetMapping
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
  public List<Status> getAll() {
    return statusService.getAll();
  }

  @GetMapping("/{id}")
<<<<<<< HEAD
  public Status getById(@PathVariable("id") Integer id) {
=======
  public Status getById(@PathVariable Integer id) {
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
    return statusService.getById(id);
  }

  @PostMapping
  public Status create(@RequestBody Status status) {
    return statusService.create(status);
  }

<<<<<<< HEAD
  @PutMapping("/update/{id}")
  public Status update(
    @PathVariable("id") Integer id,
    @RequestBody Status status
  ) {
=======
  @PutMapping("/{id}")
  public Status update(@PathVariable Integer id, @RequestBody Status status) {
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
    return statusService.update(id, status);
  }

  @DeleteMapping("/{id}")
<<<<<<< HEAD
  public Status delete(@PathVariable("id") Integer id) {
=======
  public Status delete(@PathVariable Integer id) {
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
    return statusService.delete(id);
  }
}
