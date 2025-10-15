# CacoIA 🐵

Mascote: Macaco sorrindo

## Sobre o Projeto

CacoIA é uma aplicação web completa para reciclagem de conteúdo utilizando IA, com interface moderna e mascote infantil.

## Arquitetura

O projeto é dividido em 3 partes:

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Spring Boot (Java)
- **IA Service**: FastAPI (Python)

## Pré-requisitos

- Node.js (v18+)
- Java JDK 21
- Maven
- Python 3.10+
- PostgreSQL (para produção)

## Como Rodar Localmente

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

### 2. Backend (Java)

```bash
cd backend
mvn spring-boot:run
```

O backend estará disponível em: `http://localhost:8080`

### 3. IA Service (Python)

```bash
cd ia-service
python -m venv venv
# No Windows:
.\venv\Scripts\activate
# No Linux/Mac:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
```

O serviço de IA estará disponível em: `http://localhost:8000`

## Estrutura do Projeto

```
caco/
├── frontend/           # React + Vite
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Spring Boot
│   ├── src/
│   └── pom.xml
├── ia-service/         # FastAPI
│   ├── main.py
│   └── requirements.txt
└── README.md
```

## Fluxo de Dados

1. Usuário envia texto pelo **Frontend**
2. **Frontend** → **Backend Java** (porta 8080)
3. **Backend Java** → **Serviço Python** (porta 8000)
4. **Serviço Python** processa com IA simulada
5. Resposta retorna pelo mesmo caminho

## Tecnologias

- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Spring Boot, Spring Security, RestTemplate
- **IA**: FastAPI, Pydantic
- **Banco**: PostgreSQL (produção), H2 (desenvolvimento)

## Cores do Tema 🎨

- Marrom: #5d4037, #6d4c41, #3e2723
- Laranja: #ff6f00, #d84315
- Bege: #ffe0b2, #fff3e0

---

Feito com ❤️ por CacoIA
