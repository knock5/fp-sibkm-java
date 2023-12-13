package id.co.mii.serverapp.services;

import id.co.mii.serverapp.models.People;
import id.co.mii.serverapp.models.Role;
import id.co.mii.serverapp.models.User;
import id.co.mii.serverapp.models.dto.PeopleRequest;
import id.co.mii.serverapp.repositories.PeopleRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {

  private PeopleRepository peopleRepository;
  private ModelMapper modelMapper;
  private RoleService roleService;
  private PasswordEncoder passwordEncoder;

  public People registration(PeopleRequest peopleRequest) {
    People people = modelMapper.map(peopleRequest, People.class);
    User user = modelMapper.map(peopleRequest, User.class);

    // set password
    user.setPassword(passwordEncoder.encode(peopleRequest.getPassword()));

    // // set role to admin
    // List<Role> roles = new ArrayList<>();
    // roles.add(roleService.findByName("admin"));
    // user.setRoles(roles);

    // // set role to officer
    // List<Role> roles = new ArrayList<>();
    // roles.add(roleService.findByName("officer"));
    // user.setRoles(roles);

    // set role to user
    List<Role> roles = new ArrayList<>();
    roles.add(roleService.findByName("user"));
    user.setRoles(roles);

    people.setUser(user);
    user.setPeople(people);

    return peopleRepository.save(people);
  }
}
