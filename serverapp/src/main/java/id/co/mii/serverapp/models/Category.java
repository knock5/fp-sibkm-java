package id.co.mii.serverapp.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Category {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "category_id")
  private Integer id;

  @Column(name = "category_name", length = 20, nullable = false, unique = true)
  private String name;

  @Column(name = "description", length = 255, nullable = false)
  private String description;

  @OneToMany(mappedBy = "category")
  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  private List<Complaint> complaints;
}
