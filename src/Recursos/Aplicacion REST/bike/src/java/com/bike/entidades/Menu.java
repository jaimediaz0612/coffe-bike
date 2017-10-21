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
@Table(name = "menu")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Menu.findAll", query = "SELECT m FROM Menu m")
    , @NamedQuery(name = "Menu.findByMeCodigo", query = "SELECT m FROM Menu m WHERE m.meCodigo = :meCodigo")
    , @NamedQuery(name = "Menu.findByProducto", query = "SELECT m FROM Menu m WHERE m.producto = :producto")
    , @NamedQuery(name = "Menu.findByTipo", query = "SELECT m FROM Menu m WHERE m.tipo = :tipo")
    , @NamedQuery(name = "Menu.findByCantidad", query = "SELECT m FROM Menu m WHERE m.cantidad = :cantidad")
    , @NamedQuery(name = "Menu.findByValor", query = "SELECT m FROM Menu m WHERE m.valor = :valor")})
public class Menu implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "me_codigo")
    private Integer meCodigo;
    @Size(max = 255)
    @Column(name = "producto")
    private String producto;
    @Size(max = 255)
    @Column(name = "tipo")
    private String tipo;
    @Column(name = "cantidad")
    private BigInteger cantidad;
    @Column(name = "valor")
    private BigInteger valor;

    public Menu() {
    }

    public Menu(Integer meCodigo) {
        this.meCodigo = meCodigo;
    }

    public Integer getMeCodigo() {
        return meCodigo;
    }

    public void setMeCodigo(Integer meCodigo) {
        this.meCodigo = meCodigo;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public BigInteger getCantidad() {
        return cantidad;
    }

    public void setCantidad(BigInteger cantidad) {
        this.cantidad = cantidad;
    }

    public BigInteger getValor() {
        return valor;
    }

    public void setValor(BigInteger valor) {
        this.valor = valor;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (meCodigo != null ? meCodigo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Menu)) {
            return false;
        }
        Menu other = (Menu) object;
        if ((this.meCodigo == null && other.meCodigo != null) || (this.meCodigo != null && !this.meCodigo.equals(other.meCodigo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.bike.entidades.Menu[ meCodigo=" + meCodigo + " ]";
    }
    
}
