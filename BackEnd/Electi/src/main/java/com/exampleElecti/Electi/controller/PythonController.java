package com.exampleElecti.Electi.controller;


import com.exampleElecti.Electi.service.PythonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/python")
public class PythonController {

    private PythonService pythonService;

    @Autowired
    public PythonController(PythonService pythonService_){
        this.pythonService = pythonService_;
    }

    @PostMapping("/phe")
    public CompletableFuture<String> processPhe(@RequestBody Map<String, String> request){
        String data = request.get("data");
        return pythonService.executePythonAsync(data, "src/main/resources/scripts/script.py");
    }



}
