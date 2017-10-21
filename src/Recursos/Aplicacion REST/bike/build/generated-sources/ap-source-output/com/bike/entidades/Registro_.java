package com.bike.entidades;

import java.math.BigInteger;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.6.1.v20150605-rNA", date="2017-10-20T22:50:57")
@StaticMetamodel(Registro.class)
public class Registro_ { 

    public static volatile SingularAttribute<Registro, BigInteger> ciclista;
    public static volatile SingularAttribute<Registro, Integer> reCodigo;
    public static volatile SingularAttribute<Registro, String> correo;
    public static volatile SingularAttribute<Registro, BigInteger> telefono;
    public static volatile SingularAttribute<Registro, String> nombre;

}