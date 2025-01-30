package com.exampleElecti.Electi.controller;

import com.exampleElecti.Electi.service.ChatbotService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/chatbot")
public class ChatbotController {

    private final ChatbotService chatbotService;

    @Autowired
    public ChatbotController(ChatbotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    @PostMapping("/send")
    public ResponseEntity<Map<String, String>> sendMessage(@RequestBody Map<String, String> request) {
        // Extrae el mensaje del usuario del cuerpo de la solicitud
        String userMessage = request.get("message");

        // Obtiene la respuesta del chatbot a través del servicio
        String chatbotResponse = chatbotService.getChatbotResponse(userMessage);

        // Crea un JSON con la respuesta
        Map<String, String> response = new HashMap<>();
        response.put("response", chatbotResponse);

        // Devuelve la respuesta en formato JSON
        return ResponseEntity.ok(response);
    }
}