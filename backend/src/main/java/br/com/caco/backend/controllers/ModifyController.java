package br.com.caco.backend.controllers;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import br.com.caco.backend.dtos.ModifyRequestDTO;
import br.com.caco.backend.dtos.ModifyResponseDTO;


@RestController
@RequestMapping("/api/modify-content")
public class ModifyController {

    @PostMapping
    public ModifyResponseDTO reciclarConteudo(@RequestBody ModifyRequestDTO requisicao) {
        System.out.println("Texto recebido no backend: " + requisicao.texto_original());

        
        RestTemplate restTemplate = new RestTemplate();

        
        String urlServicoIA = "http://127.0.0.1:8000/modify-content";

        var corpoRequisicaoIA = new RequisicaoIAParaPython(requisicao.texto_original());

       
        ModifyResponseDTO respostaDaIA = restTemplate.postForObject(urlServicoIA, corpoRequisicaoIA, ModifyResponseDTO.class);
        
        System.out.println("Resposta recebida da IA: " + respostaDaIA);
        
        return respostaDaIA;
    }

    private record RequisicaoIAParaPython(String texto_original) {}
}