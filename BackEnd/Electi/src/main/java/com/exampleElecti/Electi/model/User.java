package com.exampleElecti.Electi.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/*
 * @Author: Cervantes Juan
 * @Date: 1/10/2025
 * */

@Entity
@Table
public class User {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "section")
    private String section;

    @Column(name = "polling_station")
    private String polling_station;

    @Column(name = "age")
    private Integer age;

    public User(){}
    public User(String id_, String name_, String email_, String password_, String section_, String polling_station_, Integer age_){
        this.id = id_;
        this.name = name_;
        this.email = email_;
        this.password = password_;
        this.section = section_;
        this.polling_station = polling_station_;
        this.age = age_;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getPolling_station() {
        return polling_station;
    }

    public void setPolling_station(String polling_station) {
        this.polling_station = polling_station;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
