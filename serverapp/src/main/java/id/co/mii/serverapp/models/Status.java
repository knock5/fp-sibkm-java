package id.co.mii.serverapp.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
public class Status {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "status_id")
  private Integer id;

  @Column(name = "status_name", length = 20, nullable = false)
  private String name;

  @OneToMany(
    mappedBy = "status",
    cascade = CascadeType.ALL,
    fetch = FetchType.LAZY
  )
  private List<Complaint> complaints;

  @OneToMany(
    mappedBy = "status",
    cascade = CascadeType.ALL,
    fetch = FetchType.LAZY
  )
  private List<History> histories;
}
