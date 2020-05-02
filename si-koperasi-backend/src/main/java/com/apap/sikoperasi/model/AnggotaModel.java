package com.apap.sikoperasi.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



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
    
    @NotNull
    @Size(max = 200)
    @Column(name = "uuid_user", nullable = false)
    private String uuidUser;
    

    
    //@OneToMany(mappedBy = "pilot", fetch = FetchType.LAZY)
    //private List<FlightModel> listFlight = new ArrayList<FlightModel>();
}

