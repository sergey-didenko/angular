package com.sergey.didenko.spring.template;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * Main class
 */
@SpringBootApplication
@EnableConfigurationProperties({LiquibaseProperties.class})
public class TemplateApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(TemplateApplication.class);

		// Set default profile (dev)
		ApplicationWebXml.addDefaultProfile(app);
		app.run(args);
	}
}
