package id.co.mii.serverapp.models.dto;



import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ComplaintRequest {
    private String title;
    private String body;
    private String attachment;
    private Date date;
    private Integer statusId;
    private Integer peopleId;
    private Integer categoryId;
    private Integer followUpId;
}
