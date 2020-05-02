package com.apap.sikoperasi.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class PinjamanModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotNull
    @Column(name = "tangal_pengajuan", nullable = false)
    private Date tanggalPengajuan;
    

    @Column(name = "tanggal_disetujui")
    private Date tanggalDisetujui;
    

    @Column(name = "tanggal_pengembalian")
    private Date tanggalPengembalian;
    
    @NotNull
    @Column(name = "jumlah_pinjaman", nullable = false)
    private int jumlahPinjaman;
    
    @NotNull
    @Column(name = "jumlah_pengembalian", nullable = false)
    private int jumlahPengembalian;
    
    @NotNull
    @Column(name = "status")
    private int status;

}
