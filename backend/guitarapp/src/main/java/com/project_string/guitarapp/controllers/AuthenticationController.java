package com.project_string.guitarapp.controllers;


import com.project_string.guitarapp.user.User;
import com.project_string.guitarapp.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody RegistrationRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already in use";
        }

        User user = new User(
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()),
                request.getUsername()
                );

        userRepository.save(user);

        return "User registered";
    }
}