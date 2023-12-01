// package id.co.mii.serverapp.services;

// import java.util.List;

// import org.modelmapper.ModelMapper;
// import org.springframework.http.HttpStatus;
// import org.springframework.stereotype.Service;
// import org.springframework.web.server.ResponseStatusException;

// import id.co.mii.serverapp.models.FollowUp;
// import id.co.mii.serverapp.models.dto.FollowUpRequest;
// import id.co.mii.serverapp.repositories.FollowUpRepository;
// import lombok.AllArgsConstructor;

// @Service
// @AllArgsConstructor
// public class FollowUpService {
//     private FollowUpRepository followUpRepository;
//     private ModelMapper modelMapper;
//     private ComplaintService complaintService;

//     public List<FollowUp> getAll() {
//         return followUpRepository.findAll();
//     }

//     public FollowUp createDTO(FollowUpRequest followUpRequest){
//         FollowUp followUp = modelMapper.map(followUpRequest, FollowUp.class);
//         // followUp.setStatus(statusService.getById(followUpRequest.getStatusId()));
//         // followUp.setCategory(categoryService.getById(followUpRequest.getCategoryId()));
//         followUp.setComplaint(complaintService.getById(followUpRequest.getComplaintId()));
//         return followUpRepository.save(followUp);
//     }

//     public FollowUp getById(Integer id){
//         return followUpRepository.findById(id).orElseThrow(() ->
//         new ResponseStatusException(HttpStatus.NOT_FOUND, "Data Kosong"));
//     }

//     public FollowUp update (Integer id, FollowUp followUp){
//         getById(id);
//         followUp.setId(id);
//         return followUpRepository.save(followUp);
//     }
// }
