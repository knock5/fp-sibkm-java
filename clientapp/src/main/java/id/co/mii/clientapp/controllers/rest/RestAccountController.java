package id.co.mii.clientapp.controllers.rest;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.mii.clientapp.models.People;
import id.co.mii.clientapp.services.AccountService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping
public class RestAccountController {
    private AccountService accountService;

    // Get Profile
    @GetMapping("/profile")
    public People getProfile(Authentication auth){
        return accountService.getProfile(auth.getName());
    }
}
