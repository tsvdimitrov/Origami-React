import Header from './components/Header/Header.js';
import Menu from './components/Menu/Menu.js';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Menu />
        <main className="main">

        </main>
      </div>
    </div >
  );
}

export default App;
