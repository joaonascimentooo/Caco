# IA Service - CacoIA

Serviço de IA em Python usando FastAPI para processamento de conteúdo.

## Tecnologias

- FastAPI
- Pydantic
- Uvicorn

## Como Rodar

1. Criar ambiente virtual:
```bash
python -m venv venv
```

2. Ativar ambiente virtual:
```bash
# Windows
.\venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

3. Instalar dependências:
```bash
pip install -r requirements.txt
```

4. Rodar o servidor:
```bash
uvicorn main:app --reload
```

O serviço estará disponível em: `http://localhost:8000`

## Endpoints

- `GET /` - Status do serviço
- `POST /modify-content` - Processa conteúdo (espera `texto_original`)

## Exemplo de Requisição

```json
{
  "texto_original": "Seu texto aqui..."
}
```

## Exemplo de Resposta

```json
{
  "versao_twitter": "Tweet gerado pela IA...",
  "versao_linkedin": "Post LinkedIn gerado pela IA..."
}
```
