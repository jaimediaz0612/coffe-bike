package com.bike.entidades;

import java.math.BigInteger;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.6.1.v20150605-rNA", date="2017-10-20T22:50:57")
@StaticMetamodel(Bicicleta.class)
public class Bicicleta_ { 

    public static volatile SingularAttribute<Bicicleta, Integer> biCodigo;
    public static volatile SingularAttribute<Bicicleta, String> tipo;
    public static volatile SingularAttribute<Bicicleta, String> color;
    public static volatile SingularAttribute<Bicicleta, BigInteger> talla;
    public static volatile SingularAttribute<Bicicleta, BigInteger> rin;
    public static volatile SingularAttribute<Bicicleta, BigInteger> cambios;

}