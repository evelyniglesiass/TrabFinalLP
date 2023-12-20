package com.example.deputados.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.context.annotation.Bean;

@Configuration
public class ApiConfig {

    @Bean
    public RestTemplate restTesmplate() {
        return new RestTemplate();
    }
    
}
