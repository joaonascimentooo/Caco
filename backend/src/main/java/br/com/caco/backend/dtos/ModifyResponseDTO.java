package br.com.caco.backend.dtos;


import com.fasterxml.jackson.annotation.JsonProperty;

public record ModifyResponseDTO(
    @JsonProperty("versao_twitter") String twitter,

    @JsonProperty("versao_linkedin") String linkedin
) {
}
