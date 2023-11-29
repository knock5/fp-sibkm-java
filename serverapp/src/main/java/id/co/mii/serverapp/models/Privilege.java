package id.co.mii.serverapp.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_privilege")
public class Privilege {
     
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       @Column(name = "privilege_id")
       private Integer id;

       @Column(name = "privilege_name")
       private String name;

       @ManyToMany(mappedBy = "privileges")
       private List<Role> roles;
}
