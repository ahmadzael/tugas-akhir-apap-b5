package com.apap.sikoperasi.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "simpanan")
public class SimpananModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotNull
    @Column(name = "tanggal_setor")
    private Date tanggalSetor;

    @NotNull
    @Column(name = "jumlah")
    private int jumlah;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_anggota_penyetor", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private AnggotaModel penyetor;
    
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_anggota_penerima", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private AnggotaModel penerima;
    
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "id_jenis_simpanan", referencedColumnName = "id")
//    private JenisSimpanan jenisSimpanan;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getTanggalSetor() {
		return tanggalSetor;
	}

	public void setTanggalSetor(Date tanggalSetor) {
		this.tanggalSetor = tanggalSetor;
	}

	public int getJumlah() {
		return jumlah;
	}

	public void setJumlah(int jumlah) {
		this.jumlah = jumlah;
	}

	public AnggotaModel getPenyetor() {
		return penyetor;
	}

	public void setPenyetor(AnggotaModel penyetor) {
		this.penyetor = penyetor;
	}

	public AnggotaModel getPenerima() {
		return penerima;
	}

	public void setPenerima(AnggotaModel penerima) {
		this.penerima = penerima;
	}

	/*
	 * public JenisSimpanan getJenisSimpanan() { return jenisSimpanan; }
	 * 
	 * public void setJenisSimpanan(JenisSimpanan jenisSimpanan) {
	 * this.jenisSimpanan = jenisSimpanan; }
	 */
    
    
    

}
