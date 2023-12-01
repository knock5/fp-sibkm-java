package id.co.mii.serverapp.models.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowUpRequest {
    private Date followUpDate;
    private String followUpNotes;
    // private Integer complaintId;
    private Integer statusId;
    // private Integer officerId;
}
