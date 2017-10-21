/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bike.entidades;

import java.io.Serializable;
import java.math.BigInteger;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author jaime
 */
@Entity
@Table(name = "registro")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Registro.findAll", query = "SELECT r FROM Registro r")
    , @NamedQuery(name = "Registro.findByReCodigo", query = "SELECT r FROM Registro r WHERE r.reCodigo = :reCodigo")
    , @NamedQuery(name = "Registro.findByNombre", query = "SELECT r FROM Registro r WHERE r.nombre = :nombre")
    , @NamedQuery(name = "Registro.findByCorreo", query = "SELECT r FROM Registro r WHERE r.correo = :correo")
    , @NamedQuery(name = "Registro.findByCiclista", query = "SELECT r FROM Registro r WHERE r.ciclista = :ciclista")
    , @NamedQuery(name = "Registro.findByTelefono", query = "SELECT r FROM Registro r WHERE r.telefono = :telefono")})
public class Registro implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "re_codigo")
    private Integer reCodigo;
    @Size(max = 255)
    @Column(name = "nombre")
    private String nombre;
    @Size(max = 255)
    @Column(name = "correo")
    private String correo;
    @Column(name = "ciclista")
    private BigInteger ciclista;
    @Column(name = "telefono")
    private BigInteger telefono;

    public Registro() {
    }

    public Registro(Integer reCodigo) {
        this.reCodigo = reCodigo;
    }

    public Integer getReCodigo() {
        return reCodigo;
    }

    public void setReCodigo(Integer reCodigo) {
        this.reCodigo = reCodigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public BigInteger getCiclista() {
        return ciclista;
    }

    public void setCiclista(BigInteger ciclista) {
        this.ciclista = ciclista;
    }

    public BigInteger getTelefono() {
        return telefono;
    }

    public void setTelefono(BigInteger telefono) {
        this.telefono = telefono;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (reCodigo != null ? reCodigo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Registro)) {
            return false;
        }
        Registro other = (Registro) object;
        if ((this.reCodigo == null && other.reCodigo != null) || (this.reCodigo != null && !this.reCodigo.equals(other.reCodigo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.bike.entidades.Registro[ reCodigo=" + reCodigo + " ]";
    }
    
}
