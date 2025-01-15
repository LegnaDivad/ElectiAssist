package com.exampleElecti.Electi.model;


import jakarta.persistence.*;

/*
 * @Author: Cervantes Juan
 * @Date: 1/13/2025
 * */

@Entity
@Table(name = "USER_VOTE")
public class User_Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private String user_id;

    @Column(name = "presidency_id")
    private String presidency_id;

    @Column(name = "deputy_id")
    private String deputy_id;

    @Column(name = "mayor_id")
    private String mayor_id;

    @Column(name = "governor_id")
    private String governor_id;

    @Column(name = "senator_id")
    private String senator_id;

    public User_Vote(){}

    public User_Vote(Long id_, String user_id_, String presidency_id_, String deputy_id_, String mayor_id_, String governor_id_, String senator_id_){
        this.id = id_;
        this.user_id = user_id_;
        this.presidency_id = presidency_id_;
        this.deputy_id = deputy_id_;
        this.mayor_id = mayor_id_;
        this.governor_id = governor_id_;
        this.senator_id = senator_id_;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPresidency_id() {
        return presidency_id;
    }

    public void setPresidency_id(String presidency_id) {
        this.presidency_id = presidency_id;
    }

    public String getDeputy_id() {
        return deputy_id;
    }

    public void setDeputy_id(String deputy_id) {
        this.deputy_id = deputy_id;
    }

    public String getGovernor_id() {
        return governor_id;
    }

    public void setGovernor_id(String governor_id) {
        this.governor_id = governor_id;
    }

    public String getMayor_id() {
        return mayor_id;
    }

    public void setMayor_id(String mayor_id) {
        this.mayor_id = mayor_id;
    }

    public String getSenator_id() {
        return senator_id;
    }

    public void setSenator_id(String senator_id) {
        this.senator_id = senator_id;
    }
}
