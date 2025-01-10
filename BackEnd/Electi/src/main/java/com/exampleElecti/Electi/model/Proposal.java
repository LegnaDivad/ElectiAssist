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
public class Proposal {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "proposal")
    private String proposal;

    @Column(name = "candidate_id")
    private String candidate_id;

    public Proposal(){}
    public Proposal(String id_, String proposal_ , String candidate_id_){
        this.id = id_;
        this.proposal = proposal_;
        this.candidate_id = candidate_id_;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCandidate_id() {
        return candidate_id;
    }

    public void setCandidate_id(String candidate_id) {
        this.candidate_id = candidate_id;
    }

    public String getProposal() {
        return proposal;
    }

    public void setProposal(String proposal) {
        this.proposal = proposal;
    }
}
