from fastapi import FastAPI
from pydantic import BaseModel
import time

class Requisicao(BaseModel):
    texto_original: str

app = FastAPI()

@app.post("/modify-content")
def reciclar_conteudo(requisicao: Requisicao):

    print(f"Texto recebido pela IA: {requisicao.texto_original[:30]}...")
    
    time.sleep(2)

    return {
        "versao_twitter": "Este é um tweet gerado pela IA simulada! 🐦 #CacoAI",
        "versao_linkedin": "Como um profissional, a IA simulada gerou este post para o LinkedIn sobre o texto recebido. #Desenvolvimento #Inovação"
    }

@app.get("/")
def read_root():
    return {"message": "Serviço de IA Simulada do Caco está em execução!"}