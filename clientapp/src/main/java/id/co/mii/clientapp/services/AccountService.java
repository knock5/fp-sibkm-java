package id.co.mii.clientapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import id.co.mii.clientapp.models.People;



@Service
public class AccountService {

    @Value("${server.api.url}/people/profile")
    private String url;

    @Autowired
    private RestTemplate restTemplate;

    public People getProfile(String name) {
    return restTemplate
      .exchange(
        url.concat("?name=" + name),
        HttpMethod.GET,
        null,
        People.class
      )
      .getBody();
  }
}
