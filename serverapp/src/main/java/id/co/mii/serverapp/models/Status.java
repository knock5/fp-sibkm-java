package id.co.mii.serverapp.models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_complaint_status")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id", length = 30)
    private Integer id;

    @Column(name = "status_name", length = 20, nullable = false)
    private String name;

    @OneToMany(mappedBy = "status")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Complaint> complaints;

    @OneToMany(mappedBy = "status")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<History> histories;

    @OneToMany(mappedBy = "status")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<FollowUp> followups;
}
