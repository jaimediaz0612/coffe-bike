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
@Table(name = "bicicleta")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Bicicleta.findAll", query = "SELECT b FROM Bicicleta b")
    , @NamedQuery(name = "Bicicleta.findByBiCodigo", query = "SELECT b FROM Bicicleta b WHERE b.biCodigo = :biCodigo")
    , @NamedQuery(name = "Bicicleta.findByTipo", query = "SELECT b FROM Bicicleta b WHERE b.tipo = :tipo")
    , @NamedQuery(name = "Bicicleta.findByColor", query = "SELECT b FROM Bicicleta b WHERE b.color = :color")
    , @NamedQuery(name = "Bicicleta.findByTalla", query = "SELECT b FROM Bicicleta b WHERE b.talla = :talla")
    , @NamedQuery(name = "Bicicleta.findByRin", query = "SELECT b FROM Bicicleta b WHERE b.rin = :rin")
    , @NamedQuery(name = "Bicicleta.findByCambios", query = "SELECT b FROM Bicicleta b WHERE b.cambios = :cambios")})
public class Bicicleta implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "bi_codigo")
    private Integer biCodigo;
    @Size(max = 255)
    @Column(name = "tipo")
    private String tipo;
    @Size(max = 255)
    @Column(name = "color")
    private String color;
    @Column(name = "talla")
    private BigInteger talla;
    @Column(name = "rin")
    private BigInteger rin;
    @Column(name = "cambios")
    private BigInteger cambios;

    public Bicicleta() {
    }

    public Bicicleta(Integer biCodigo) {
        this.biCodigo = biCodigo;
    }

    public Integer getBiCodigo() {
        return biCodigo;
    }

    public void setBiCodigo(Integer biCodigo) {
        this.biCodigo = biCodigo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public BigInteger getTalla() {
        return talla;
    }

    public void setTalla(BigInteger talla) {
        this.talla = talla;
    }

    public BigInteger getRin() {
        return rin;
    }

    public void setRin(BigInteger rin) {
        this.rin = rin;
    }

    public BigInteger getCambios() {
        return cambios;
    }

    public void setCambios(BigInteger cambios) {
        this.cambios = cambios;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (biCodigo != null ? biCodigo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Bicicleta)) {
            return false;
        }
        Bicicleta other = (Bicicleta) object;
        if ((this.biCodigo == null && other.biCodigo != null) || (this.biCodigo != null && !this.biCodigo.equals(other.biCodigo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.bike.entidades.Bicicleta[ biCodigo=" + biCodigo + " ]";
    }
    
}
