package id.co.mii.clientapp.services;

import id.co.mii.clientapp.models.People;
import id.co.mii.clientapp.models.dto.request.PeopleRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AuthService {

  // @Value("${server.api.url}/login")
  // private String loginUrl;

  @Value("${server.api.url}/registration")
  private String regisUrl;

  @Autowired
  private RestTemplate restTemplate;

  // register user
  public People registerUser(PeopleRequest peopleRequest) {
    return restTemplate
      .exchange(
        regisUrl,
        HttpMethod.POST,
        new HttpEntity<>(peopleRequest),
        People.class
      )
      .getBody();
  }
}
