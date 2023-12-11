package id.co.mii.clientapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DataComplaintUserController {
    
    @GetMapping("/tambah-complaint")
    public String dataKategoriPage(Model model) {
    model.addAttribute("title", "LaporYuk - Buat Laporan");
    model.addAttribute("isActive", "u-dashboard");

    return "views/user/tambah-complaint";
  }
}
