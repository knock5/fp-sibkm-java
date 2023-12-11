package id.co.mii.serverapp.services;

import id.co.mii.serverapp.models.People;
import id.co.mii.serverapp.models.Role;
import id.co.mii.serverapp.models.User;
import id.co.mii.serverapp.models.dto.PeopleRequest;
import id.co.mii.serverapp.repositories.PeopleRepository;
import lombok.AllArgsConstructor;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    
    private PeopleRepository peopleRepository;
    private ModelMapper modelMapper;
    private RoleService roleService;

    public People registration(PeopleRequest peopleRequest) {
        People people = modelMapper.map(peopleRequest, People.class);
        User user = modelMapper.map(peopleRequest, User.class);

        List<Role> roles = new ArrayList<>();
        roles.add(roleService.getById(3));
        user.setRoles(roles);

        people.setUser(user);
        user.setPeople(people);

        return peopleRepository.save(people);
    }
}
