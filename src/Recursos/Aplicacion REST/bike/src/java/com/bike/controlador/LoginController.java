/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bike.controlador;

import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;

/**
 *
 * @author jaime
 */
@Named(value = "loginController")
@SessionScoped
public class LoginController implements Serializable {

    /**
     * Creates a new instance of LoginController
     */
    public LoginController() {
    }
    
}
