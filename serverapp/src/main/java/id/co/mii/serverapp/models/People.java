package id.co.mii.serverapp.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_people")
public class People {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "people_id", length = 30)
    private Integer id;

    @Column(name = "NIK", length = 20, nullable = false, unique = true)
    private Integer nik;

    @Column(name = "name", length = 30, nullable = false)
    private String name;

    @Column(name = "email", length = 20, nullable = false)
    private String email;

    @Column(name = "address", length = 30, nullable = false)
    private String address;

    @Column(name = "phone", length = 12, nullable = false, unique = true)
    private String phone;

    @Column(name = "job", length = 20)
    private String job;

    @Column(name = "profile_picture", length = 255)
    private String profile_picture;

    @OneToOne(mappedBy = "people", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private User user;
}
