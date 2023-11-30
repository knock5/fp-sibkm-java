package id.co.mii.serverapp.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.co.mii.serverapp.models.People;
import id.co.mii.serverapp.services.PeopleService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/people")
public class PeopleController {
    private PeopleService peopleService;

    @GetMapping
    public List <People> getAll(){
        return peopleService.getAll();
    }

    @PostMapping
    public People create(@RequestBody People People){
        return peopleService.create(People);
    }

    @GetMapping("/{id}")
    public People getById(@PathVariable Integer id){
        return peopleService.getById(id);
    }

    @PutMapping("/{id}")
    public People update (@PathVariable Integer id, @RequestBody People People){
        return peopleService.update(id, People);
    }
}
