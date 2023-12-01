package id.co.mii.serverapp.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import id.co.mii.serverapp.models.Complaint;
import id.co.mii.serverapp.models.dto.ComplaintRequest;
import id.co.mii.serverapp.repositories.ComplaintRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ComplaintService {
    private ComplaintRepository complaintRepository;
    private StatusService statusService;
    private CategoryService categoryService;
    private PeopleService peopleService;
    // private FollowUpService followUpService;
    private ModelMapper modelMapper;

    public List<Complaint> getAll() {
        return complaintRepository.findAll();
    }

    // public Complaint create(Complaint complaint){
    //     return complaintRepository.save(complaint);
    // }

    public Complaint createDTO(ComplaintRequest complaintRequest){
        Complaint complaint = modelMapper.map(complaintRequest, Complaint.class);
        complaint.setStatus(statusService.getById(complaintRequest.getStatusId()));
        complaint.setCategory(categoryService.getById(complaintRequest.getCategoryId()));
        complaint.setPeople(peopleService.getById(complaintRequest.getPeopleId()));
        // complaint.setFollowUp(followUpService.getById(complaintRequest.getFollowUpId()));
        return complaintRepository.save(complaint);
    }

    public Complaint getById(Integer id){
        return complaintRepository.findById(id).orElseThrow(() ->
        new ResponseStatusException(HttpStatus.NOT_FOUND, "Data Kosong"));
    }

    public Complaint update (Integer id, Complaint complaint){
        getById(id);
        complaint.setId(id);
        return complaintRepository.save(complaint);
    }

    public Complaint delete(Integer id) {
        Complaint complaint = getById(id);
        complaintRepository.delete(complaint);
        return complaint;
    }
}
