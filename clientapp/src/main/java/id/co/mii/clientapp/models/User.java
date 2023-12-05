package id.co.mii.clientapp.models;

import java.util.List;
import javax.management.relation.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

  private Integer id;
  private String username;
  private String password;
  private String isEnabled;
  private String isAccountNonLocked;
  private List<Role> roles;
}
