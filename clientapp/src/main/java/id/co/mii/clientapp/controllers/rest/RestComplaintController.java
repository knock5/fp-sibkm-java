package id.co.mii.clientapp.controllers.rest;

import id.co.mii.clientapp.models.Complaint;
import id.co.mii.clientapp.services.ComplaintService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/complaint")
public class RestComplaintController {

  private ComplaintService complaintService;

  @GetMapping
  public List<Complaint> getAll() {
    return complaintService.getAll();
  }

  @GetMapping("/{id}")
  public Complaint getById(@PathVariable Integer id) {
    return complaintService.getById(id);
  }

  @DeleteMapping("/{id}")
  public Complaint delete(@PathVariable Integer id) {
    return complaintService.delete(id);
  }
}
