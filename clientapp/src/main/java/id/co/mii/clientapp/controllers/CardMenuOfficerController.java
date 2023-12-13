package id.co.mii.clientapp.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CardMenuOfficerController {

  @GetMapping("/data-pengaduan")
  public String dataLaporanPage(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );
    model.addAttribute("title", "LaporYuk - Data Pengaduan");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-pengaduan";
  }

  @GetMapping("/data-fu")
  public String dataFollowUp(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );
    model.addAttribute("title", "LaporYuk - Data Follow Up");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-fu";
  }

  @GetMapping("/data-kategori")
  public String dataKategoriPage(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );
    model.addAttribute("title", "LaporYuk - Data Kategori");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-kategori";
  }

  @GetMapping("/data-status")
  public String dataStatus(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );
    model.addAttribute("title", "LaporYuk - Data Status");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-status";
  }

  @GetMapping("/fu-complaint")
  public String fuComplaintPage(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );
    model.addAttribute("title", "LaporYuk - Follow Up Pengaduan");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/fu-complaint";
  }
}
