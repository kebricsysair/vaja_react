package si.vaja.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate template;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@java.lang.Override
	public void run(java.lang.String... args) throws Exception {

		template.update("INSERT INTO Uporabnik(Ime, Priimek, Starost) VALUES ('Klara', 'Kebric', 20)");
	}
}
