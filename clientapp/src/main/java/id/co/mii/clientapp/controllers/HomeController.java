package id.co.mii.clientapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping
  public String index(Model model) {
    model.addAttribute("title", "Home");
    model.addAttribute("isActive", "home");

    return "views/home";
  }

  @GetMapping("/home")
  public String home(Model model) {
    model.addAttribute("title", "Home");
    model.addAttribute("isActive", "home");

    return "views/home";
  }

  @GetMapping("/h-kategori")
  public String kategoriHome(Model model) {
    model.addAttribute("title", "Kategori Pengaduan");
    model.addAttribute("isActive", "h-kategori");

    return "views/kategori-pengaduan";
  }

  @GetMapping("/h-tentang")
  public String tentang(Model model) {
    model.addAttribute("title", "Tentang");
    model.addAttribute("isActive", "h-tentang");

    return "views/tentang";
  }
}
