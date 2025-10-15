# Backend - CacoIA

Backend em Spring Boot que atua como intermediário entre o frontend e o serviço de IA.

## Tecnologias

- Spring Boot 3.x
- Spring Security
- Spring Web
- PostgreSQL/H2
- Maven

## Como Rodar

1. Certifique-se de ter o Java JDK 21 instalado
2. Execute:
```bash
mvn spring-boot:run
```

O backend estará disponível em: `http://localhost:8080`

## Configuração

Edite `src/main/resources/application.properties` para configurar o banco de dados.

## Endpoints

- `POST /api/modify-content` - Recebe conteúdo do frontend e repassa para o serviço Python

## Estrutura

```
src/
├── main/
│   ├── java/
│   │   └── br/com/caco/backend/
│   │       ├── controllers/     # Controllers REST
│   │       ├── dtos/            # DTOs
│   │       └── core/config/     # Configurações
│   └── resources/
│       └── application.properties
```

## CORS

O projeto está configurado para permitir requisições do frontend na porta 5173 (Vite).
