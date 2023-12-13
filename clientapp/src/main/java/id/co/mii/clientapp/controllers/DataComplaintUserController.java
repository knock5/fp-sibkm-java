package id.co.mii.clientapp.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DataComplaintUserController {

  @GetMapping("/tambah-complaint")
  public String dataKategoriPage(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );

    model.addAttribute("title", "LaporYuk - Buat Laporan");
    model.addAttribute("isActive", "u-dashboard");

    return "views/user/tambah-complaint";
  }
}
