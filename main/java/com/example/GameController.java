package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {

    @GetMapping("/")
    public String home() {
        return "index"; // Retorna o nome do arquivo HTML que está localizado em src/main/resources/templates
    }
}
