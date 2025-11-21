package com.project_string.guitarapp.user;

public record UserRegistrationRequest(
    String email,
    String password,
    String username
) {}
