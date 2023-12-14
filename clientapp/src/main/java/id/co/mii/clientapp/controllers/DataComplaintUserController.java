package id.co.mii.clientapp.controllers;

import groovyjarjarantlr4.v4.parse.ANTLRParser.atom_return;
import id.co.mii.clientapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DataComplaintUserController {

  @Autowired
  private UserService userService;

  @GetMapping("/tambah-complaint")
  public String dataKategoriPage(Model model) {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();

    // get user id from username
    String username = auth.getName();
    Integer userId = userService.findUserIdByUsername(username);

    model.addAttribute("userId", userId);
    model.addAttribute(
      "username",
      auth.getName().substring(0, 1).toUpperCase() + auth.getName().substring(1)
    );
    model.addAttribute("title", "LaporYuk - Buat Laporan");
    model.addAttribute("isActive", "u-dashboard");

    return "views/user/tambah-complaint";
  }
}
