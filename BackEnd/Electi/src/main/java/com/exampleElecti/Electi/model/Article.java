package com.exampleElecti.Electi.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/*
 * @Author: Cervantes Juan
 * @Date: 1/13/2025
 * */

@Entity
@Table
public class Article {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "title")
    private String title;

    @Column(name = "user_id")
    private String user_id;

    public Article(){}

    public Article(String id_, String title_, String user_id_){
        this.id = id_;
        this.title = title_;
        this.user_id = user_id_;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
