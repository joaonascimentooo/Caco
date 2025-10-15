import { useState } from 'react';
import axios from 'axios'; 
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false); 
  const [textoOriginal, setTextoOriginal] = useState('');
  const [conteudoReciclado, setConteudoReciclado] = useState(null);

  const handleReciclarClick = async () => {
    console.log("Enviando para a API:", textoOriginal);

    setIsLoading(true);
    setConteudoReciclado(null); 

    try {
      const response = await axios.post('http://localhost:8080/api/modify-content', {
        texto_original: textoOriginal
      });

      console.log("Resposta da API:", response.data);
      setConteudoReciclado(response.data);

    } catch (error) {
      console.error("Houve um erro ao chamar a API!", error);
      alert("Oops! Algo deu errado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`app-layout${sidebarOpen ? ' sidebar-open' : ''}`}>
      <aside className={`sidebar${sidebarOpen ? ' open' : ' closed'}`}>
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {sidebarOpen ? '✖' : '☰'}
        </button>
        {sidebarOpen && (
          <>
            <div className="logo">Caco</div>
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Reciclar</a></li>
                <li><a href="#">Sobre</a></li>
              </ul>
            </nav>
            <footer className="sidebar-footer">
              <span>© 2025 Caco</span>
            </footer>
          </>
        )}
      </aside>
      <div className="main-content">
        <header className="topbar">
          <h1>Modificador de Conteúdo </h1>
          <p className="subtitle">Cole o seu conteúdo abaixo e veja a mágica acontecer!</p>
        </header>
        <main>
          <div className="input-area">
            <textarea
              value={textoOriginal}
              onChange={(e) => setTextoOriginal(e.target.value)}
              placeholder="Cole aqui o link do seu vídeo do YouTube, o texto do seu artigo..."
              className="input-textarea"
            />
            <button onClick={handleReciclarClick} disabled={isLoading} className="reciclar-btn">
              {isLoading ? 'A Reciclar...' : 'Reciclar Conteúdo'}
            </button>
          </div>
          {conteudoReciclado && (
            <section className="resultados">
              <h2>Conteúdo Reciclado:</h2>
              <div className="post twitter">
                <h3>Versão Twitter 🐦</h3>
                <p>{conteudoReciclado.versao_twitter}</p>
              </div>
              <div className="post linkedin">
                <h3>Versão LinkedIn 💼</h3>
                <p>{conteudoReciclado.versao_linkedin}</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;