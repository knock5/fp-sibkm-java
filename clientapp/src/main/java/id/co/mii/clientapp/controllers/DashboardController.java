package id.co.mii.clientapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

  @GetMapping("/a-dashboard")
  public String dashboardAdmin(Model model) {
    model.addAttribute("title", "Dashboard Admin");
    model.addAttribute("isActive", "a-dashboard");

    return "views/admin/dashboard-admin";
  }

  @GetMapping("/u-dashboard")
  public String dashboardUser(Model model) {
    model.addAttribute("title", "Dashboard User");
    model.addAttribute("isActive", "u-dashboard");

    return "views/user/dashboard-user";
  }

  @GetMapping("/o-dashboard")
  public String dashboardOfficer(Model model) {
    model.addAttribute("title", "Dashboard Officer");
    model.addAttribute("isActive", "o-dashboard");

    return "views/officer/dashboard-officer";
  }
}
