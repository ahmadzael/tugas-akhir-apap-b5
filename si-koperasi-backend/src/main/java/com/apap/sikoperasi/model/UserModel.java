package com.apap.sikoperasi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "username", nullable = false)
    private String username;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "password", nullable = false)
    private String password;

}
