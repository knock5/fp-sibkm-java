package id.co.mii.clientapp.controllers.rest;

import id.co.mii.clientapp.models.FollowUp;
import id.co.mii.clientapp.services.FollowUpService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/followUp")
public class RestFollowUpController {

  private FollowUpService followUpService;

  @GetMapping
  public List<FollowUp> getAll() {
    return followUpService.getAll();
  }
}
