/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bike.controlador;

import com.bike.entidades.Bicicleta;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author jaime
 */
@Stateless
public class BicicletaFacade extends AbstractFacade<Bicicleta> {

    @PersistenceContext(unitName = "bikePU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public BicicletaFacade() {
        super(Bicicleta.class);
    }
    
}
