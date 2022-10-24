import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={onClose} style={{backgroundColor:'green',padding:'12px',border:'1px solid black',cursor:'pointer'}}>Закрыть</button>
    </div>
  );
}

export default App;
