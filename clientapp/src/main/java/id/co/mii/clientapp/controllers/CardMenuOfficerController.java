package id.co.mii.clientapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CardMenuOfficerController {

  @GetMapping("/data-pengaduan")
  public String dataLaporanPage(Model model) {
    model.addAttribute("title", "LaporYuk - Data Pengaduan");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-pengaduan";
  }

  @GetMapping("/data-fu")
  public String dataFollowUp(Model model) {
    model.addAttribute("title", "LaporYuk - Data Follow Up");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-fu";
  }

  @GetMapping("/data-kategori")
  public String dataKategoriPage(Model model) {
    model.addAttribute("title", "LaporYuk - Data Kategori");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-kategori";
  }
}
