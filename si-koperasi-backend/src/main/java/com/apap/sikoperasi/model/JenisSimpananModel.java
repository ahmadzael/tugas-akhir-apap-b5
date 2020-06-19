package com.apap.sikoperasi.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "jenis_simpanan")
public class JenisSimpananModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotNull
    @Column(name = "nama", nullable = false)
    private String nama;
    
	@OneToOne(mappedBy = "jenisSimpanan")
    @JsonIgnore
    private SimpananModel simpanan;
    
    public SimpananModel getSimpanan() {
		return simpanan;
	}

	public void setSimpanan(SimpananModel simpanan) {
		this.simpanan = simpanan;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNama() {
		return nama;
	}

	public void setNama(String nama) {
		this.nama = nama;
	}
	
    
    


}
