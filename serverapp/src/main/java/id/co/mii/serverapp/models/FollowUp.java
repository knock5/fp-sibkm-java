package id.co.mii.serverapp.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_complaint_fu")
public class FollowUp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_up_id", length = 30)
    private Integer id;

    @Column(name = "follow_up_date", nullable = false)
    private Date followUpDate;

    @Column(name = "follow_up_notes", length = 150, nullable = false)
    private String followUpNotes;

    @OneToOne
    @JoinColumn(name = "complaint_id")
    private Complaint complaint;

    @ManyToOne
    @JoinColumn(name = "officer_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;
}
