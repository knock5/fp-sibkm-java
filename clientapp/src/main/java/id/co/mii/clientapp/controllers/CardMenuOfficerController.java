package id.co.mii.clientapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CardMenuOfficerController {

  @GetMapping("/data-pengaduan")
  public String dataLaporanPage(Model model) {
    model.addAttribute("title", "LaporYuk - Data Pengaduan");

    return "views/officer/data-pengaduan";
  }

  @GetMapping("/data-kategori")
  public String dataKategoriPage(Model model) {
    model.addAttribute("title", "LaporYuk - Data Kategori");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/data-kategori";
  }
}
