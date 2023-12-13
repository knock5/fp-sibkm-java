package id.co.mii.clientapp.controllers;

import id.co.mii.clientapp.models.dto.request.PeopleRequest;
import id.co.mii.clientapp.services.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@AllArgsConstructor
@RequestMapping
public class AuthController {

  private AuthService authService;

  @GetMapping("/signup")
  public String regisPage(Model model) {
    model.addAttribute("title", "LaporYuk - Sign Up");
    model.addAttribute("peopleRequest", new PeopleRequest());

    return "views/auth/registration-page";
  }

  @GetMapping("/signin")
  public String loginPage(Model model) {
    model.addAttribute("title", "LaporYuk - Sign In");

    return "views/auth/login-page";
  }

  @PostMapping("/registration")
  public String registerUser(
    PeopleRequest peopleRequest,
    RedirectAttributes ra
  ) {
    ra.addFlashAttribute("message", "Registrasi berhasil, silahkan login!");
    authService.registerUser(peopleRequest);

    return "redirect:/signin";
  }
}
