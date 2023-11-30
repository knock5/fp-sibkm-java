package id.co.mii.serverapp.services;

import java.util.List;
import org.springframework.stereotype.Service;
import id.co.mii.serverapp.models.User;
import id.co.mii.serverapp.repositories.UserRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {
    
    private UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }
}
