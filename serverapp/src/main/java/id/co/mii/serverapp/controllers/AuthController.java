package id.co.mii.serverapp.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import id.co.mii.serverapp.models.People;
import id.co.mii.serverapp.models.dto.PeopleRequest;
import id.co.mii.serverapp.services.AuthService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping
public class AuthController {
    
    private AuthService authService;

    @PostMapping("/registration")
    public People registration(@RequestBody PeopleRequest peopleRequest) {
        return authService.registration(peopleRequest);
    }
}
