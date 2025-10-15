# 🐵 CacoIA: Seu Parceiro Inteligente para Reciclagem de Conteúdo! ♻️

> Uma aplicação web completa para otimizar e reciclar seu conteúdo usando o poder da Inteligência Artificial, com uma interface moderna e um mascote cativante para todas as idades.

## 🚀 Sobre o Projeto

CacoIA é mais do que uma ferramenta; é uma solução inteligente que transforma a forma como você interage com seu conteúdo. Seja para reformular textos, extrair informações chave ou gerar novas ideias, CacoIA simplifica o processo, permitindo que você maximize o valor de cada palavra. Nossa interface amigável e o mascote Caco garantem uma experiência divertida e eficiente.


## ⚙️ Arquitetura do Projeto

Nosso projeto é modular e robusto, dividido em três camadas principais para garantir escalabilidade e manutenção:

-   **Frontend**: ⚛️ Desenvolvido com **React**, **Vite** e estilizado com **Tailwind CSS** para uma interface de usuário dinâmica e responsiva.
-   **Backend**: ☕️ Construído com **Spring Boot (Java)**, fornecendo uma API RESTful segura e eficiente.
-   **IA Service**: 🧠 Alimentado por **FastAPI (Python)**, dedicado ao processamento inteligente de dados com IA.

## ✅ Pré-requisitos

Para rodar o CacoIA localmente, você precisará dos seguintes softwares instalados:

-   [Node.js](https://nodejs.org/en/download/) (v18+)
-   [Java JDK 21](https://www.oracle.com/java/technologies/downloads/)
-   [Maven](https://maven.apache.org/download.cgi)
-   [Python 3.10+](https://www.python.org/downloads/)
-   [PostgreSQL](https://www.postgresql.org/download/) (Recomendado para ambiente de produção)

## 💻 Como Rodar Localmente

Siga os passos abaixo para colocar o CacoIA em funcionamento no seu ambiente de desenvolvimento:

```bash
cd frontend
npm install
npm run dev

### 2. backend

cd backend
mvn spring-boot:run

### 3. I.A
cd ia-service
python -m venv venv
# No Windows:
.\venv\Scripts\activate
# No Linux/Mac:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
