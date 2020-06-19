package com.apap.sikoperasi.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "pinjaman")
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
    

    @Column(name = "jumlah_pengembalian")
    private int jumlahPengembalian;
    
    @NotNull
    @Column(name = "status")
    private int status;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_anggota", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private AnggotaModel anggota;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getTanggalPengajuan() {
		return tanggalPengajuan;
	}

	public void setTanggalPengajuan(Date tanggalPengajuan) {
		this.tanggalPengajuan = tanggalPengajuan;
	}

	public Date getTanggalDisetujui() {
		return tanggalDisetujui;
	}

	public void setTanggalDisetujui(Date tanggalDisetujui) {
		this.tanggalDisetujui = tanggalDisetujui;
	}

	public Date getTanggalPengembalian() {
		return tanggalPengembalian;
	}

	public void setTanggalPengembalian(Date tanggalPengembalian) {
		this.tanggalPengembalian = tanggalPengembalian;
	}

	public int getJumlahPinjaman() {
		return jumlahPinjaman;
	}

	public void setJumlahPinjaman(int jumlahPinjaman) {
		this.jumlahPinjaman = jumlahPinjaman;
	}

	public int getJumlahPengembalian() {
		return jumlahPengembalian;
	}

	public void setJumlahPengembalian(int jumlahPengembalian) {
		this.jumlahPengembalian = jumlahPengembalian;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public AnggotaModel getAnggota() {
		return anggota;
	}

	public void setAnggota(AnggotaModel anggota) {
		this.anggota = anggota;
	}
    
    

}
