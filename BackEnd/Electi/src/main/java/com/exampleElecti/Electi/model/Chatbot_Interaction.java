package com.exampleElecti.Electi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

/*
 * @Author: Cervantes Juan
 * @Date: 1/13/2025
 * */


@Entity
@Table
public class Chatbot_Interaction {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "question")
    private String question;

    @Column(name = "response")
    private String response;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "user_id")
    private String user_id;

    public Chatbot_Interaction(){}

    public Chatbot_Interaction(String id_, String question_, String response_, LocalDate date_){
        this.id = id_;
        this.question = question_;
        this.response = response_;
        this.date = date_;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
