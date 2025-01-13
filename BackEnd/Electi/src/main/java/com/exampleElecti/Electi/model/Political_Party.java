package com.exampleElecti.Electi.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/*
 * @Author: Cervantes Juan
 * @Date: 1/13/2025
 * */

@Table
@Entity
public class Political_Party {

    @Id
    @Column(name ="id")
    private String id;

    @Column(name ="name")
    private String name;

    @Column(name ="image_url")
    private String image_url;

    public Political_Party(){}

    public Political_Party(String id_, String name_, String image_url_){
        this.id = id_;
        this.name = name_;
        this.image_url = image_url_;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
}
