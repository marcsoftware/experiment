package com.example.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@CrossOrigin(origins = "*")
@Controller	
@RequestMapping(path="/demo") 
public class MainController {
	@Autowired 
			   
	private UserRepository userRepository;

	@PostMapping(path="/add") 
	public @ResponseBody String addNewUser (@RequestParam String name
			, @RequestParam String email,@RequestParam String note) {
		
		

		User n = new User(name,email,note);
		
		userRepository.save(n);
		return "Saved";
	}

	/*
	@PostMapping(path= "/food",consumes = "application/json")
	public @ResponseBody String update(@RequestBody Food food) {
		food.setDate();
		FoodRepository.save(food);
		return "yes";
	}
	*/
	@PostMapping(path= "/json",consumes = "application/json")
	public @ResponseBody String update(@RequestBody User user) {
		
		userRepository.save(user);
		return "yes";
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@GetMapping("/note/{name}")
	public @ResponseBody Iterable<String> getstuffwithquery(@PathVariable String name) {
		
		return userRepository.customGetNote(name);
	}
}
