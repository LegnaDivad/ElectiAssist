package com.exampleElecti.Electi.security;

import com.exampleElecti.Electi.service.JwtService;

/*
* @Author:Juan Cervantes
* @Date: 1/21/2025
* @About: Checks and filters the given token
* */
public class JwtAuthenticationFilter {

    /********* ATTRIBUTES*********/
    private final JwtService jwtService;

    /*********CONSTRUCTOR*********/
    public JwtAuthenticationFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

//    @Override
//    protected void 
}
