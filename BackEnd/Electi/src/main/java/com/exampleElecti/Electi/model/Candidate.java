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
public class Candidate {
    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "level")
    private String level;

    @Column(name = "political_party")
    private String political_party;

    @Column(name = "position")
    private String position;

    public Candidate(){}
    public Candidate(String id_, String name_, Integer age_, String level_, String political_party_, String position_){
        this.id  = id_;
        this.name = name_;
        this.age = age_;
        this.level = level_;
        this.political_party = political_party_;
        this.position = position_;
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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getPolitical_party() {
        return political_party;
    }

    public void setPolitical_party(String political_party) {
        this.political_party = political_party;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
