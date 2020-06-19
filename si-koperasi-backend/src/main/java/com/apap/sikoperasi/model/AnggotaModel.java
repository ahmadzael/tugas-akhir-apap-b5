package com.apap.sikoperasi.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "anggota")
public class AnggotaModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "nia", nullable = false)
    private String nia;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "nama", nullable = false)
    private String nama;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "tempat_lahir", nullable = false)
    private String tempatLahir;
    
    @NotNull
    @Column(name = "tanggal_lahir")
    private Date tanggalLahir;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "alamat", nullable = false)
    private String alamat;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "telepon", nullable = false)
    private String telepon;
    
    @NotNull
    @Column(name = "is_pengurus")
    private boolean isPengurus;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    @JoinColumn(name = "uuid_user", referencedColumnName = "uuid")
    private UserModel users;
     
    @OneToMany(mappedBy = "anggota", fetch = FetchType.LAZY)
    private List<PinjamanModel> listPeminjaman = new ArrayList<PinjamanModel>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNia() {
		return nia;
	}

	public void setNia(String nia) {
		this.nia = nia;
	}

	public String getNama() {
		return nama;
	}

	public void setNama(String nama) {
		this.nama = nama;
	}

	public String getTempatLahir() {
		return tempatLahir;
	}

	public void setTempatLahir(String tempatLahir) {
		this.tempatLahir = tempatLahir;
	}

	public Date getTanggalLahir() {
		return tanggalLahir;
	}

	public void setTanggalLahir(Date tanggalLahir) {
		this.tanggalLahir = tanggalLahir;
	}

	public String getAlamat() {
		return alamat;
	}

	public void setAlamat(String alamat) {
		this.alamat = alamat;
	}

	public String getTelepon() {
		return telepon;
	}

	public void setTelepon(String telepon) {
		this.telepon = telepon;
	}

	public boolean isPengurus() {
		return isPengurus;
	}

	public void setPengurus(boolean isPengurus) {
		this.isPengurus = isPengurus;
	}

	public UserModel getUser() {
		return users;
	}

	public void setUser(UserModel user) {
		this.users = user;
	}

}

