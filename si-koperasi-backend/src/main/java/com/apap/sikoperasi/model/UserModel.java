package com.apap.sikoperasi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class UserModel implements Serializable{   
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "uuid")
	private String uuid;
	
    @NotNull
    @Size(max = 200)
    @Column(name = "username", nullable = false)
    private String username;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "password", nullable = false)
    private String password;
    
    @OneToOne(mappedBy = "users")
    @JsonIgnore
    private AnggotaModel anggota;

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public AnggotaModel getAnggota() {
		return anggota;
	}

	public void setAnggota(AnggotaModel anggota) {
		this.anggota = anggota;
	}
    
    
    

}
