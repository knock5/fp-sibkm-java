package id.co.mii.serverapp.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.mii.serverapp.models.FollowUp;
import id.co.mii.serverapp.models.dto.FollowUpRequest;
import id.co.mii.serverapp.services.FollowUpService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/followUp")
public class FollowUpController {
    private FollowUpService followUpService;

    @GetMapping
    public List <FollowUp> getAll(){
        return followUpService.getAll();
    }

    @PostMapping
    public FollowUp createDTO(@RequestBody FollowUpRequest followUpRequest){
        return followUpService.createDTO(followUpRequest);
    }

    @GetMapping("/{id}")
    public FollowUp getById(@PathVariable Integer id){
        return followUpService.getById(id);
    }

    @PutMapping("/{id}")
    public FollowUp update (@PathVariable Integer id, @RequestBody FollowUp FollowUp){
        return followUpService.update(id, FollowUp);
    }
}
