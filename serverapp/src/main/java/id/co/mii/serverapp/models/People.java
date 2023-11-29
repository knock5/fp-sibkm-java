package id.co.mii.serverapp.models;

import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class People {

    private Integer id;
    private Integer nik;
    private String name;
    private String email;
    private String address;
    private String phone;
    private String job;
    private String profile_picture;
}
