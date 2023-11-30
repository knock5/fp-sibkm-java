package id.co.mii.serverapp.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import id.co.mii.serverapp.models.People;
import id.co.mii.serverapp.repositories.PeopleRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PeopleService {
    private PeopleRepository peopleRepository;

    public List<People> getAll() {
        return peopleRepository.findAll();
    }

    public People create(People people){
        return peopleRepository.save(people);
    }

    public People getById(Integer id){
        return peopleRepository.findById(id).orElseThrow(() ->
        new ResponseStatusException(HttpStatus.NOT_FOUND, "Data Kosong"));
    }

    public People update (Integer id, People people){
        getById(id);
        people.setId(id);
        return peopleRepository.save(people);
    }
}
