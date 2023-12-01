// package id.co.mii.serverapp.controllers;

// import java.util.List;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import id.co.mii.serverapp.models.User;
// import id.co.mii.serverapp.services.UserService;
// import lombok.AllArgsConstructor;

// @RestController
// @AllArgsConstructor
// @RequestMapping("/user")
// public class UserController {
//     private UserService userService;

//     @GetMapping
//     public List <User> getAll(){
//         return userService.getAll();
//     }

//     @PostMapping
//     public User create(@RequestBody User user){
//         return userService.create(user);
//     }

//     @GetMapping("/{id}")
//     public User getById(@PathVariable Integer id){
//         return userService.getById(id);
//     }

//     @PutMapping("/{id}")
//     public User update (@PathVariable Integer id, @RequestBody User user){
//         return userService.update(id, user);
//     }
// }
