package id.co.mii.serverapp.models.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowUpRequest {

  @JsonFormat(pattern = "yyyy-MM-dd")
  private Date followUpDate;

  private String followUpNotes;
  private Integer complaintId;
  private Integer officerId;
  private Integer statusId;
}
