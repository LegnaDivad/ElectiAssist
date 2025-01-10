package com.exampleElecti.Electi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class ElectiApplication {

	@GetMapping("/")
	public static void main(String[] args) {
		SpringApplication.run(ElectiApplication.class, args);
	}

}
