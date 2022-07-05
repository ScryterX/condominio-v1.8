package com.controle.condominio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class CondominioApplication {

	public static void main(String[] args) {
		SpringApplication.run(CondominioApplication.class, args);
	}

	@RequestMapping("/")
	public String login(){
		return "Index";
	}
}
